const heading = document.querySelector('#heading');

const keyframes = {
  borderRadius:[
    '20% 50& 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};

const options =  {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity
};

heading.animate(keyframes,options);

const item = document.querySelector('#item');

const keyframes2 = {
  color: ['transparent','#fff'],
  backgroundPosition: ['0','100%'],
  transform: ['translateY(-100%)', 'translateY(0)'], // 追加: 上から下に浮かび上がるアニメーション
};

const options2 = {
  duration: 5000,
  easing: 'ease',
};

item.animate(keyframes2,options2);
