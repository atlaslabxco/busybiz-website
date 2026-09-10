'use strict';
const toggle=document.getElementById('navToggle'),nav=document.getElementById('navLinks');
function setMenu(open){nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');}
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus();}});
matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
const form=document.getElementById('enquiry'),note=document.getElementById('formNote'),config=window.BUSY_BIZ_CONFIG||{};
const campaign=new URLSearchParams(location.search).get('campaign');
if(campaign)form.elements.message.value='I’m interested in a '+campaign.slice(0,100)+' campaign. ';
if(!config.email&&!config.formEndpoint){document.getElementById('deliveryNote').textContent='Preview: enquiry delivery is not connected yet. Your details will not be sent.';}
form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(!config.email&&!config.formEndpoint){note.textContent='This preview cannot send enquiries yet. Your details have not been sent or saved.';return;}
 const data=new FormData(form),button=form.querySelector('button');
 if(config.formEndpoint){
  let endpoint;try{endpoint=new URL(config.formEndpoint);if(endpoint.protocol!=='https:')throw new Error();}catch{note.textContent='Enquiry delivery is unavailable. Please try again later.';return;}
  button.disabled=true;note.textContent='Sending your enquiry…';
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{const response=await fetch(endpoint.href,{method:'POST',body:data,headers:{Accept:'application/json'},signal:controller.signal});if(!response.ok)throw new Error();note.textContent='Thanks — your enquiry has been sent. We’ll reply to your email.';form.reset();}
  catch{note.textContent='We couldn’t confirm delivery. Your details are still here. Please try again.';}
  finally{clearTimeout(timer);button.disabled=false;}
 }else{
  const body=Array.from(data,([key,value])=>key+': '+value).join('\n\n');
  location.href='mailto:'+encodeURIComponent(config.email)+'?subject='+encodeURIComponent('My Busy Biz campaign idea')+'&body='+encodeURIComponent(body);
  note.textContent='Your email app will open with the enquiry. Please send it there to complete your request.';
 }
});
