function sort(array) {
  //Selection sort，設定最左邊為最小值，然後與右邊一格格比對，尋找最小值，跑完後，在與原先的交換，接著換下一個
  //要再花時間想一下如何修改成function programming

  array.forEach((a, index) => {
    let mini = a['distance']; //設定初始值
    //交換事項次好幻象次好
    let miniIndex = index;
    let currentIndex = index;
    selectSort(index + 1);
    function selectSort(index) {
      //從第二個開始 1
      //array.length,到下一個沒東西
      if (index === array.length) {
        [array[currentIndex], array[miniIndex]] = [
          array[miniIndex],
          array[currentIndex],
        ];
        return;
      } else {
        if (mini > array[index]['distance']) {
          mini = array[index]['distance'];
          miniIndex = index;
        }
        selectSort(index + 1);
      }
    }
  });
  return array;
}

export default sort;
