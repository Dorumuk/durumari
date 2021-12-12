function dragNdrop(object) {
  const element = document.getElementsByClassName(object)[0];
  console.log(element);

  element.ondragstart = function () {
    return false;
  };

  element.onmousedown = function (event) {
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    //position, zIndex 수정해 오브젝트 이동 준비
    element.style.position = "absolute";
    element.style.zIndex = 1000;

    // body를 기준으로 위치를 지정
    document.body.append(object);

    // pageX, pageY 좌표 중앙으로 오브젝트 이동
    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + "px";
      element.style.top = pageY - shiftY + "px";
    }

    // 포인터 아래로 오브젝트 이동
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    //마우스 이동시 오브젝트 이동 이벤트
    document.addEventListener("mousemove", onMouseMove);

    // 핸들러를 제거
    element.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      element.onmouseup = null;
    };
  };
}
