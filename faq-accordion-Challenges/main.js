document.addEventListener('DOMContentLoaded', function() {
  const plusButton1 = document.querySelector('.plus-1');
  const minusButton1 = document.querySelector('.minus-1');
  const head1 = document.querySelector('.p1');
  const p2 = document.querySelector('.p2');

  const plusButton3 = document.querySelector('.plus-3');
  const minusButton3 = document.querySelector('.minus-3');
  const head2 = document.querySelector('.p3');
  const p4 = document.querySelector('.p4');

  const plusButton5 = document.querySelector('.plus-5');
  const minusButton5 = document.querySelector('.minus-5');
  const head3 = document.querySelector('.p5');
  const p6 = document.querySelector('.p6');

  const plusButton7 = document.querySelector('.plus-7');
  const minusButton7 = document.querySelector('.minus-7');
  const head4 = document.querySelector('.p7');
  const p8 = document.querySelector('.p8');

  /////////////////////// head 1 ///////////////////////////////////
  minusButton1.style.display = 'block';
  plusButton1.style.display = 'none';
  p2.style.display = 'none';
  head1.style.display = 'block';

  head1.addEventListener('click', function() {
    if (p2.style.display === 'none') {
      p2.style.display = 'block';
      plusButton1.style.display = 'block';
      minusButton1.style.display = 'none';

      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    } 
    else { // เมื่อคลิกครั้งที่ 2 p2 จะซ่อน
      p2.style.display = 'none';
      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      
      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    }
  });

  plusButton1.addEventListener('click', function() {
    plusButton1.style.display = 'none';
    minusButton1.style.display = 'block';
    p2.style.display = 'none';
  });

  minusButton1.addEventListener('click', function() {
    plusButton1.style.display = 'block';
    minusButton1.style.display = 'none';
    p2.style.display = 'block';

    plusButton3.style.display = 'none';
    minusButton3.style.display = 'block';
    p4.style.display = 'none';

    plusButton5.style.display = 'none';
    minusButton5.style.display = 'block';
    p6.style.display = 'none';

    plusButton7.style.display = 'none';
    minusButton7.style.display = 'block';
    p8.style.display = 'none';
  });

  /////////////////////// head 2 ///////////////////////////////////
  minusButton3.style.display = 'block';
  plusButton3.style.display = 'none';
  p4.style.display = 'none';
  head2.style.display = 'block';

  head2.addEventListener('click', function() {
    if (p4.style.display === 'none') {
      p4.style.display = 'block';
      plusButton3.style.display = 'block';
      minusButton3.style.display = 'none';

      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    } 
    else { // เมื่อคลิกครั้งที่ 2 p2 จะซ่อน
      p4.style.display = 'none';
      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      
      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    }
  });

  plusButton3.addEventListener('click', function() {
    plusButton3.style.display = 'none';
    minusButton3.style.display = 'block';
    p4.style.display = 'none';
   
  });

  minusButton3.addEventListener('click', function() {
    plusButton3.style.display = 'block';
    minusButton3.style.display = 'none';
    p4.style.display = 'block';

    plusButton1.style.display = 'none';
    minusButton1.style.display = 'block';
    p2.style.display = 'none';

    plusButton5.style.display = 'none';
    minusButton5.style.display = 'block';
    p6.style.display = 'none';

    plusButton7.style.display = 'none';
    minusButton7.style.display = 'block';
    p8.style.display = 'none';
    
  });

  /////////////////////// head 3 ///////////////////////////////////
  minusButton5.style.display = 'block';
  plusButton5.style.display = 'none';
  p6.style.display = 'none';
  head3.style.display = 'block';

  head3.addEventListener('click', function() {
    if (p6.style.display === 'none') {
      p6.style.display = 'block';
      plusButton5.style.display = 'block';
      minusButton5.style.display = 'none';

      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    } 
    else { // เมื่อคลิกครั้งที่ 2 p2 จะซ่อน
      p6.style.display = 'none';
      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      
      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';

      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      p8.style.display = 'none';
    }
  });

  plusButton5.addEventListener('click', function() {
    plusButton5.style.display = 'none';
    minusButton5.style.display = 'block';
    p6.style.display = 'none';
   
  });

  minusButton5.addEventListener('click', function() {
    plusButton5.style.display = 'block';
    minusButton5.style.display = 'none';
    p6.style.display = 'block';

    plusButton1.style.display = 'none';
    minusButton1.style.display = 'block';
    p2.style.display = 'none';

    plusButton3.style.display = 'none';
    minusButton3.style.display = 'block';
    p4.style.display = 'none';

    plusButton7.style.display = 'none';
    minusButton7.style.display = 'block';
    p8.style.display = 'none';
    
  });

  /////////////////////// head 4 ///////////////////////////////////
  minusButton7.style.display = 'block';
  plusButton7.style.display = 'none';
  p8.style.display = 'none';
  head4.style.display = 'block';

  head4.addEventListener('click', function() {
    if (p8.style.display === 'none') {
      p8.style.display = 'block';
      plusButton7.style.display = 'block';
      minusButton7.style.display = 'none';

      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';
    } 
    else { // เมื่อคลิกครั้งที่ 2 p2 จะซ่อน
      p8.style.display = 'none';
      plusButton7.style.display = 'none';
      minusButton7.style.display = 'block';
      
      plusButton1.style.display = 'none';
      minusButton1.style.display = 'block';
      p2.style.display = 'none';

      plusButton5.style.display = 'none';
      minusButton5.style.display = 'block';
      p6.style.display = 'none';

      plusButton3.style.display = 'none';
      minusButton3.style.display = 'block';
      p4.style.display = 'none';
    }
  });

  plusButton7.addEventListener('click', function() {
    plusButton7.style.display = 'none';
    minusButton7.style.display = 'block';
    p8.style.display = 'none';
   
  });

  minusButton7.addEventListener('click', function() {
    plusButton7.style.display = 'block';
    minusButton7.style.display = 'none';
    p8.style.display = 'block';

    plusButton1.style.display = 'none';
    minusButton1.style.display = 'block';
    p2.style.display = 'none';

    plusButton3.style.display = 'none';
    minusButton3.style.display = 'block';
    p4.style.display = 'none';

    plusButton5.style.display = 'none';
    minusButton5.style.display = 'block';
    p6.style.display = 'none';
    
  });
});
