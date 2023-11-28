const title = document.querySelector('.title');
const display = document.querySelector('.display');

// ACボタンを押したら画面が０に戻る
const update = (v) => {
  document.querySelector('input').value = v;
};

// 数字・記号ボタンを押したら画面に値・記号が追加される
const append = (v) => {
  document.querySelector('input').value += v;
};

// ％ボタンを押したら画面の値が100分の1になる
const percent = () => {
  display.value = parseFloat(display.value) / 100;
};

// ＝ボタンを押したら画面の式が計算される
const calc = () => {
  try {
    display.value = eval(display.value); // 計算
  } catch (_error) {
    update(_error); // エラー表示
  }
};

// アニメーション
const keyframes = {
  opacity: [0, 1],
  scale: [1.5, 1],
};

title.animate(keyframes, 1500);
