import { Renderer2 } from '@angular/core';

export function loginRegisterToggle(renderer: Renderer2): void {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  if (container && registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
      renderer.addClass(container, "active");
    });

    loginBtn.addEventListener('click', () => {
      renderer.removeClass(container, "active");
    });
  } 
}
