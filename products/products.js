(() => {
  const form = document.querySelector("[data-product]");
  if (!form) return;
  const dialog = document.querySelector(".p-dialog");
  const contact = window.JOY_PRODUCT_CONTACT || {};
  if (contact.qrImage) {
    const image = document.querySelector("[data-contact-qr]");
    image.alt = "Joy 的" + (contact.channel || "联系") + "二维码";
    image.addEventListener("load", () => {
      document.querySelector(".p-qr-contact").hidden = false;
    });
    image.src = contact.qrImage;
    if (image.complete && image.naturalWidth) {
      document.querySelector(".p-qr-contact").hidden = false;
    }
    document.querySelector("[data-qr-instruction]").textContent =
      contact.instruction;
    document.querySelector("[data-qr-download]").href = contact.qrImage;
  }

  const selected = () =>
    document.querySelector('input[name="platform"]:checked')?.value || "Notion";
  function update() {
    const platform = selected(),
      name = form.dataset.product;
    document
      .querySelectorAll("[data-selected-platform]")
      .forEach((el) => (el.textContent = platform));
    document.querySelector("[data-order-summary]").textContent =
      `${name} · ${platform} · ¥${form.dataset.price}`;
    document.querySelector("[data-email]").href =
      "mailto:joyjiangyi852@gmail.com?subject=" +
      encodeURIComponent("模板购买咨询｜" + name + "｜" + platform) +
      "&body=" +
      encodeURIComponent(
        "你好 Joy，我想了解 " +
          name +
          "（" +
          platform +
          " 版，¥" +
          form.dataset.price +
          "）的购买方式。",
      );
  }
  document
    .querySelectorAll('input[name="platform"]')
    .forEach((el) => el.addEventListener("change", update));
  document.querySelectorAll("[data-inquire]").forEach((button) =>
    button.addEventListener("click", () => {
      update();
      dialog.showModal();
    }),
  );
  document
    .querySelector("[data-close]")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
  document
    .querySelector("[data-copy-email]")
    .addEventListener("click", async (e) => {
      try {
        await navigator.clipboard.writeText("joyjiangyi852@gmail.com");
        e.target.textContent = "邮箱已复制";
      } catch {
        e.target.textContent = "请手动复制上方邮箱";
      }
    });
  document.querySelectorAll("[data-time]").forEach((button) =>
    button.addEventListener("click", () => {
      const video = document.querySelector("video");
      const seek = () => {
        video.currentTime = Number(button.dataset.time);
        video.play().catch(() => {});
      };
      if (video.readyState >= 1) seek();
      else {
        video.addEventListener("loadedmetadata", seek, { once: true });
        video.load();
      }
    }),
  );
  update();
})();

(() => {
 const gallery=document.querySelector('[data-gallery]');
 if(!gallery) return;
 const podcast=gallery.dataset.gallery==='podcast';
 const base=podcast?'':'/assets/products/knowledge-gallery/';
 const slides=podcast?Array.from(gallery.querySelectorAll('[data-gallery-index]'),b=>[b.querySelector('img').getAttribute('src'),b.dataset.galleryLabel]):[['notion-cover.png','Notion 知识库封面'],['overview.png','主界面介绍'],['categories.png','知识类别'],['templates.png','内容模板'],['topic-review.png','领域与专题总结']];
 const image=gallery.querySelector('[data-gallery-image]');
 const modal=document.querySelector('.p-gallery-dialog');
 const large=modal.querySelector('[data-gallery-large]');
 function show(index){
   const [file,label]=slides[index]; image.src=base+file; image.alt=label;
   gallery.querySelector('[data-gallery-caption]').textContent=`${index+1} / ${slides.length} · ${label}`;
   gallery.querySelectorAll('[data-gallery-index]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.galleryIndex)===index)));
 }
 gallery.querySelectorAll('[data-gallery-index]').forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.galleryIndex))));
 function platformChanged(){
   if(podcast){show(0);return;}
   const flow=document.querySelector('input[name="platform"]:checked')?.value==='FlowUs';
   slides[0]=[flow?'flowus-cover.png':'notion-cover.png',flow?'FlowUs 知识库封面':'Notion 知识库封面'];
   gallery.querySelector('[data-gallery-index="0"] img').src=base+slides[0][0];
   gallery.querySelector('[data-gallery-index="0"]').setAttribute('aria-label','查看：'+slides[0][1]);show(0);
 }
 document.querySelectorAll('input[name="platform"]').forEach(r=>r.addEventListener('change',platformChanged));
 gallery.querySelector('[data-gallery-open]').addEventListener('click',()=>{large.src=image.src;large.alt=image.alt;modal.showModal();});
 modal.querySelector('[data-gallery-close]').addEventListener('click',()=>modal.close());
 modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
 platformChanged();
})();
