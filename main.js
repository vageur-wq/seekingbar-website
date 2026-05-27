/* ========================================
   SeekingBar 留学工作室 - 共享脚本
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

  // ── 手机端导航栏开关 ──
  var navToggle = document.querySelector('.nav-mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      var spans = navToggle.querySelectorAll('span');
      // 汉堡动画
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    // 点击导航链接后关闭
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        var spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ── 模态框系统 ──
  window.openModal = function(id) {
    var modal = document.getElementById('modal-' + id);
    if (modal) modal.style.display = 'flex';
  };
  window.closeModal = function(id) {
    var modal = document.getElementById('modal-' + id);
    if (modal) modal.style.display = 'none';
  };
  // ESC关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(function(m) {
        m.style.display = 'none';
      });
    }
  });

  // ── FAQ 手风琴 ──
  document.querySelectorAll('.faq-q').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── 联系浮动面板 ──
  var contactBtn = document.querySelector('.contact-float-btn');
  var contactPanel = document.getElementById('contactPanel');
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

  // ── 案例卡片悬停效果 ──
  document.querySelectorAll('.adm-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 12px 40px rgba(0,0,0,.12)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // ── 表单提交 ──
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var toast = document.getElementById('toast');
      if (toast) {
        toast.style.display = 'block';
        setTimeout(function() {
          toast.style.display = 'none';
          form.reset();
        }, 3000);
      } else {
        alert('已收到信息，我们会尽快联系你！');
        form.reset();
      }
    });
  });

  // ── 滚动动画 (IntersectionObserver) ──
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });

});
