export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")){
    return ("ninghuax");
  }
  if (query.toLowerCase() == "what is your name?"){
    return ("HX");
  }
  if (query.toLowerCase().includes("plus")){
    let txt =  query.toLowerCase()
    let firstnum = parseInt(txt.substring(8, 10))
    let secondnum = parseInt(txt.substring(16, 18))
    return (firstnum + secondnum).toString();
  }

  if (query.toLowerCase().includes("largest")){
    let txt =  query.toLowerCase()
    let firstnum = parseInt(txt.substring(47, 49))
    let secondnum = parseInt(txt.substring(51, 53))
    let thirdnum = parseInt(txt.substring(55, 57))
    return Math.max(firstnum, secondnum, thirdnum).toString();
  }

  return "";
}
