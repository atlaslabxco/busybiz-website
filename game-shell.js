'use strict';
const demoNames={'restaurant-spin.html':'Spin & Win','restaurant-spinwin.html':'Dine-in Rewards','restaurant-catch.html':'Restaurant Catch','chefs-catch.html':'Chef’s Catch','fmcg-quiz.html':'Superfan Quiz','event-scratch.html':'Scratch & Win'};
const demo=demoNames[location.pathname.split('/').pop()]||'Playable';
const bar=document.createElement('nav');bar.className='bb-bar';bar.setAttribute('aria-label','Demo navigation');
const back=document.createElement('a');back.href='../index.html#games';back.textContent='← Back to Busy Biz';
const enquiry=document.createElement('a');enquiry.href='../index.html?campaign='+encodeURIComponent(demo)+'#contact';enquiry.textContent='Create a campaign like this ↗';bar.append(back,enquiry);document.body.prepend(bar);
if(document.body.classList.contains('bb-standard')){const note=document.createElement('p');note.className='bb-demo-note';note.textContent='Interactive concept only. Rewards have no monetary value. Use fictional details if prompted.';document.body.append(note);}
document.querySelectorAll('canvas').forEach(c=>c.setAttribute('aria-label',demo+' game area'));
// Keep the reward dialog dismissible and its keyboard focus inside while open.
const overlay=document.getElementById('overlay'),modal=document.getElementById('modal');
if(overlay&&modal){let previousFocus;modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Demo reward');
const close=()=>{overlay.classList.remove('show');if(previousFocus)previousFocus.focus();};
new MutationObserver(()=>{if(!overlay.classList.contains('show'))return;if(!modal.querySelector('.bb-dialog-close')){const b=document.createElement('button');b.className='bb-dialog-close';b.type='button';b.textContent='Close';b.addEventListener('click',close);modal.prepend(b);}if(!modal.contains(document.activeElement)){previousFocus=document.activeElement;modal.querySelector('button,input')?.focus();}}).observe(overlay,{attributes:true,childList:true,subtree:true});
document.addEventListener('keydown',e=>{if(!overlay.classList.contains('show'))return;if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'){const items=[...modal.querySelectorAll('button,input,a[href]')].filter(e=>!e.disabled&&e.getClientRects().length);if(!items.length)return;const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});}
