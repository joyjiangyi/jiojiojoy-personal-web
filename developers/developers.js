// Expandable project notes; native details remain usable without JavaScript.
document.querySelectorAll('.project-disclosure').forEach(detail => {
  detail.addEventListener('toggle', () => {
    detail.querySelector('.detail-label').textContent = detail.open ? '收起详情' : '项目详情';
  });
});
