import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const posts = [
  { id: 'p1', url: 'https://www.instagram.com/grandiflora_kertepites/p/DPl3EQFiHPx/' },
  { id: 'p2', url: 'https://www.instagram.com/grandiflora_kertepites/p/DP_qDuMiGc7/' },
  { id: 'p3', url: 'https://www.instagram.com/grandiflora_kertepites/p/DQr2OjmiFwd/' }
];

async function run() {
  console.log("Starting scraper...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  for (const post of posts) {
    console.log(`Navigating to ${post.url}`);
    await page.goto(post.url, { waitUntil: 'load', timeout: 30000 });
    
    // Wait for at least one image to load
    await page.waitForTimeout(3000);
    
    // Attempt to dismiss login popup
    try {
      await page.evaluate(() => {
        const divs = Array.from(document.querySelectorAll('div[role="dialog"]'));
        divs.forEach(d => {
          const closeBtn = d.querySelector('svg[aria-label="Close"]');
          if (closeBtn && closeBtn.closest('button')) closeBtn.closest('button').click();
          else d.remove();
        });
        const x = document.querySelector('svg[aria-label="Close"]');
        if (x && x.closest('button')) x.closest('button').click();
      });
    } catch (e) {}

    let images = new Set();
    
    // Extract images by clicking next
    for (let i = 0; i < 7; i++) {
        const currentSrcs = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('fna.fbcdn.net'));
        });
        currentSrcs.forEach(s => images.add(s));
        
        // click next
        try {
            const nextClicked = await page.evaluate(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const next = buttons.find(b => b.innerHTML.includes('Next') || b.querySelector('svg[aria-label="Next"]'));
                if (next) {
                    next.click();
                    return true;
                }
                return false;
            });
            if (!nextClicked) break;
            await page.waitForTimeout(1000);
        } catch (e) {
            break;
        }
    }
    
    const uniqueImages = Array.from(images);
    console.log(`Found ${uniqueImages.length} images for ${post.id}`);
    
    let index = 1;
    for (const src of uniqueImages) {
        if (!src.includes('s150x150')) {
             try {
                const response = await page.evaluate(async (url) => {
                    const res = await fetch(url);
                    const blob = await res.blob();
                    const reader = new FileReader();
                    return new Promise((resolve) => {
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    });
                }, src);
                
                if (response) {
                    const base64Data = response.split(',')[1];
                    const buffer = Buffer.from(base64Data, 'base64');
                    fs.writeFileSync(`src/assets/projects/${post.id}_${index}.jpg`, buffer);
                    console.log(`Saved ${post.id}_${index}.jpg`);
                    index++;
                }
             } catch(e) {
                 console.log(`Failed to download ${src}`);
             }
        }
    }
  }

  await browser.close();
  console.log("Scraping finished.");
}

run().catch(console.error);
