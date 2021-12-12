(function () {
    const $app = document.querySelector('#app');
    // let state = {
    //   items: ['item1', 'item2', 'item3', 'item4']
    // }
    
    const render = () => {
    //   const { items } = state;
      $app.innerHTML = `
        <div class='icon></div>
        <div class='unit_box'>
            <h2 class='unit>${unit}</h2>
        </div>
        <button class='btn_audio'>
            <img src='../common/images/btn_audio.jpg' alt='스피커'/>
        </button>
        <audio class='bgm' src='''
      `;
    //   document.querySelector('.btn_audio').addEventListener('click', () => {
    //       setState()
    //   })
    }
    
    const setState = (newState) => {
      state = { ...state, ...newState };
      render();
    }
    
    render();
  })();