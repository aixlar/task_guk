const random_num = () => {
  const temp = Math.random()
  const temp2 =  String(temp).slice(1, 4)
  return temp2.replace(".", ",")
}


export default random_num
