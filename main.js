/* ========================================
   SeekingBar 留学工作室 - 主脚本
   ======================================== */

// 移动端汉堡菜单
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // 点击菜单项后关闭菜单
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  // FAQ 折叠
  const faqItems = document.querySelectorAll('.faq-question');
  faqItems.forEach(function(question) {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      item.classList.toggle('active');
    });
  });

  // 联系浮窗
  const contactBtn = document.querySelector('.contact-float-btn');
  const contactPanel = document.getElementById('contactPanel');
  if (contactBtn && contactPanel) {
    contactBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      contactPanel.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
      if (!contactPanel.contains(e.target) && e.target !== contactBtn) {
        contactPanel.classList.remove('active');
      }
    });
  }

  // 表单提交（示例，需对接后端）
  const evalForm = document.getElementById('evalForm');
  if (evalForm) {
    evalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('感谢提交！S老师会在24小时内联系你～');
      this.reset();
    });
  }
});
