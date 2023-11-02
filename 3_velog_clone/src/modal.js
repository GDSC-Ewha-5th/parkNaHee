function resetDropdown() {
  const nodes = document.getElementsByClassName('nav-dropdown');
  for (const node of nodes) {
    node.toggleDropdown(false);
  }
}

export function useModal() {
  const cardContainer = document.querySelector('.container');

  cardContainer.addEventListener('click', (e) => {
    // Card를 클릭하면 기존에 dropdown이 열려있는 경우 닫히도록

    let el = e.target;
    //  카드 내부 요소를 클릭해도, 카드 노드가 선택됨
    while (el && !el.classList.contains('card')) {
      el = el.parentNode;
    }

    // e.target이 card일때까지 탐색
    if (!el.classList || el.classList.contains('card__modal')) return;

    resetDropdown();

    // 모달 생성
    const modalBg = document.createElement('div');
    const modalCard = document.createElement('article');
    const modalCloseBtn = document.createElement('button');

    modalBg.setAttribute('class', 'card__modal-bg');

    modalCard.innerHTML = el.innerHTML;
    modalCard.setAttribute('class', 'card card__modal');

    modalCloseBtn.innerText = 'X';
    modalCloseBtn.setAttribute('class', 'card__modal-close-btn');

    modalBg.appendChild(modalCard);
    document.body.appendChild(modalBg);
    modalCard.appendChild(modalCloseBtn);

    //   modal 띄워졌을 때는 화면이 스크롤 되지 않도록
    document.body.style.overflow = 'hidden';

    modalCloseBtn.addEventListener('click', () => {
      modalBg.remove();
      document.body.style.overflow = 'visible';
      // modal 이 사라지고, 스크롤 되도록 만들기.
    });
  });
}
