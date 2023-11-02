// write.html에서 input테그를 불러옵니다.
const input = document.querySelector('.input');

// keypress 이벤트가 발생했을 때 addTag 함수를 실행시킬 예정!
input.addEventListener('keypress', addTag);

let tagArr = [];

function addTag(e) {
  // 입력된 key가 Enter이면, (Enter키를 치면)
  if (e.key === 'Enter') {
    // 기존 태그와 중복된다면 그냥 return (중복테그 생성 방지)
    if (tagArr.includes(e.target.value)) {
      e.target.value = '';
      return;
    }
    // 새로운 태그를 만들어줍니다. (span테그에, "tag"라는 클래스 명으로)
    const newTag = document.createElement('span');
    newTag.setAttribute('class', 'tag');
    newTag.innerText = e.target.value;
    document.body.insertBefore(newTag, input);

    tagArr.push(e.target.value);
    e.target.value = '';

    // 해당 newTag를 클릭하면 해당 요소를 삭제합니다
    newTag.addEventListener('click', () => {
      newTag.remove();
    });
  }
}
