const mergeParking = (info, num) => {
  const currentParking = num.reduce((result, current) => {
    const parkInfo = info.find((p) => p.id === current.id); //若沒有找到目標，find會回傳undefined
    if (parkInfo) {
      result.push({ ...parkInfo, ...current });
    }
    return result;
  }, []); //以array為預設型態
  return currentParking;
}; //該函示用來合併兩個資料

export default mergeParking;
