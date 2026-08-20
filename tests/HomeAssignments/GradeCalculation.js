function gradeCalc(score)
{
    let grade;
    switch(true){
    case score>90:
    return grade="S";
    break;
    case  score >80:
    return grade="A";
    break;
    break;
    case score > 70:
    return grade="B";
    break;
    case score >60:
    return grade ="C";
    break;
    default:
        return grade ="D"
    }
    
}
console.log("Grade is "+gradeCalc(50))