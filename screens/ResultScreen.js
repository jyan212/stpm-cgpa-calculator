import React from 'react';
import {View,Text,StyleSheet,ScrollView } from 'react-native';
//quote people being discouraging are one thing , whether or not you are following them are another thing!!
//all data
function toGradeValue(g){
    switch(g){
        case 'A': 
        return gradeValue.A
        break;
        case 'A-': 
        return gradeValue.aMin
        break;
        case 'B+': 
        return gradeValue.bPlus
        break;
        case 'B': 
        return gradeValue.B
        break;
        case 'B-': 
        return gradeValue.bMin
        break;
        case 'C+': 
        return gradeValue.cPlus
        break;
        case 'C': 
        return gradeValue.C
        break;
        case 'C-': 
        return gradeValue.cMin
        break;
        case 'D+': 
        return gradeValue.dPlus
        break;
        case 'D': 
        return gradeValue.D
        break;
        case 'F':
        return gradeValue.f
        break;
    }
}
function toMaxGradeValue(g){
    switch(g){
        case 'A': 
        return gradeValue.max
        break;
        case 'A-': 
        return gradeValue.A - 1
        break;
        case 'B+': 
        return gradeValue.aMin - 1
        break;
        case 'B': 
        return gradeValue.bPlus - 1
        break;
        case 'B-': 
        return gradeValue.B - 1
        break;
        case 'C+': 
        return gradeValue.bMin- 1
        break;
        case 'C': 
        return gradeValue.cPlus - 1
        break;
        case 'C-': 
        return gradeValue.C - 1
        break;
        case 'D+': 
        return gradeValue.cMin - 1
        break;
        case 'D': 
        return gradeValue.dPlus - 1
        break;
        case 'F':
        return gradeValue.D - 1
        break;
       

    }
}
function pointerCalculator(pa,py,ch,mt){
    return (pa+py+ch+mt)/4
}
function toPointer(g){
    switch(g){
        case 'A': 
        return gradePointer.A
        break;
        case 'A-': 
        return gradePointer.aMin
        break;
        case 'B+': 
        return gradePointer.bPlus
        break;
        case 'B': 
        return gradePointer.B
        break;
        case 'B-': 
        return gradePointer.bMin
        break;
        case 'C+': 
        return gradePointer.cPlus
        break;
        case 'C': 
        return gradePointer.C
        break;
        case 'C-': 
        return gradePointer.cMin
        break;
        case 'D+': 
        return gradePointer.dPlus
        break;
        case 'D': 
        return gradePointer.D
        break;
        case 'F':
        return gradePointer.f
        break;
        

    }
}
function toOverallGrade(g){
    switch(true){
        case g== gradeValue.max:
        return "A";
        break;
        case g >= gradeValue.A && g < gradeValue.max :
        return "A";
        break;
        case g >= gradeValue.aMin && g < gradeValue.A:
        return "A-";
        break;
        case g >= gradeValue.bPlus && g < gradeValue.aMin :
        return "B+";
        break;
        case g >= gradeValue.B && g < gradeValue.bPlus :
        return "B";
        break;
        case g >= gradeValue.bMin && g < gradeValue.B :
        return "B-";
        break;
        case g >= gradeValue.cPlus && g < gradeValue.bMin :
        return "C+";
        break;
        case g >= gradeValue.C && g < gradeValue.cPlus :
        return "C";
        break;
        case g >= gradeValue.cMin && g < gradeValue.C :
        return "C-";
        break;
        case g >= gradeValue.dPlus && g < gradeValue.cMin :
        return "D+";
        break;
        case g >= gradeValue.D && g < gradeValue.dPlus :
        return "D";
        break;
        case g >= gradeValue.f && g < gradeValue.D :
        return "F";
        break;
    }
}
const scWeightage = (80/3)*(1/100); 
 const subjectData = [
            {
                subjectName : 'Science',
                semOneWeight : scWeightage,
                semTwoWeight : scWeightage,
                semThreeWeight : scWeightage,
                cwWeight : 0.2,
            },
            {
                subjectName : 'Pengajian Am',
                semOneWeight : 0.29,
                semTwoWeight : 0.22,
                semThreeWeight : 0.29,
                cwWeight : 0.2,
            }
        ]
 var gradeValue = {
            max: 100,
            A : 80 ,
            aMin : 75 ,
            bPlus : 70,
            
            B: 65,
            bMin : 60,
            cPlus :  55,
            C : 50,
            cMin : 45,
            D : 30,
            dPlus : 40,
            f : 0,
            
        }
const gradePointer = {
            A : 4.0 ,
            
            aMin : 3.67 ,
            bPlus : 3.33,
            B: 3.0,
            bMin : 2.67,
            cPlus :  2.33,
            C : 2.0,
            cMin : 1.67,
            D : 1.33,
            dPlus : 1.0,
            f : 0,
        }
        //greater than ( smallest value)
        // range = currentGradeValue to ( nextGradeValue - 1 )  eg : A- = (aMin to A-1) = 73 to 79.
var paMin,pyMin,chMin,mtMin
var paMax,pyMax,chMax,mtMax;
var pa,py,ch,mt
class OverallResult extends React.Component {
    render(){
        return (
            <View style={{flex:1,alignItems:'center',height:180,width:'95%',marginTop:10,marginBottom: this.props.isLastItem ? 5 : 0,backgroundColor: this.props.result=='min'? '#ff7770':'lightgreen',borderRadius:3 }}>
                <Text style={[styles.fontSty,{marginTop:5}]}>{this.props.title}</Text>
                <Text>{this.props.result=="min" ? 'Overall Minimum pointer: ' : 'Overall Maximum Pointer: '}{pointerCalculator(toPointer(toOverallGrade(this.props.m1)),toPointer(toOverallGrade(this.props.m2)),toPointer(toOverallGrade(this.props.m3)),toPointer(toOverallGrade(this.props.m4))) }</Text>
                
            </View>
        );
    }
}
class SubjectResult extends React.Component {
    
    render(){
        return(
            <View style={{flex:1,alignItems:'center',height:180,width:'95%',marginTop:10,marginBottom: this.props.isLastItem ? 5 : 0,backgroundColor: this.props.result=='min'? '#ff7770':'lightgreen',borderRadius:3 }}>
                <Text style={[styles.fontSty,{marginTop:5}]}>{this.props.title}</Text>
                <Text>{this.props.result=="min" ? 'Minimum marks: ' : 'Maximum marks: '}{this.props.marks}</Text>
                <Text>{this.props.result=="min" ? 'Minimum grade: ' : 'Maximum grade: '}{toOverallGrade(this.props.marks)}</Text>
                <Text>{this.props.result=="min" ? 'Minimum pointer: ' : 'Maximum pointer: ' }{toPointer(toOverallGrade(this.props.marks))}</Text>
            </View>
        )
    }
}
export default class ResultScreen extends React.Component {
    constructor(props){
        super(props)
    }
   
    render(){
       //all calc here
       const { navigation } = this.props
       
    paS = navigation.state.params.pa.toString();
    pyS = navigation.state.params.py.toString();
    chS = navigation.state.params.ch.toString();
    mtS = navigation.state.params.mt.toString();
   
    pa = paS.split(',');
    py = pyS.split(',')
    ch = chS.split(',')
    mt = mtS.split(',')        
        //minimum marks 
      // lowest alert(JSON.stringify(toGradeValue(pa[2])));
     
     paMin = toGradeValue(pa[1]) * subjectData[1].semOneWeight + toGradeValue(pa[2]) * subjectData[1].semTwoWeight + toGradeValue(pa[3]) * subjectData[1].semThreeWeight + toGradeValue(pa[4]) * subjectData[1].cwWeight;
     pyMin = toGradeValue(py[1]) * subjectData[0].semOneWeight + toGradeValue(py[2]) * subjectData[0].semTwoWeight + toGradeValue(py[3]) * subjectData[0].semThreeWeight+ toGradeValue(py[4]) * subjectData[0].cwWeight;
    chMin = toGradeValue(ch[1]) * subjectData[0].semOneWeight + toGradeValue(ch[2]) * subjectData[0].semTwoWeight + toGradeValue(ch[3]) * subjectData[0].semThreeWeight+ toGradeValue(ch[4]) * subjectData[0].cwWeight;
    mtMin =toGradeValue(mt[1]) * subjectData[0].semOneWeight + toGradeValue(mt[2]) * subjectData[0].semTwoWeight + toGradeValue(mt[3]) * subjectData[0].semThreeWeight+ toGradeValue(mt[4]) * subjectData[0].cwWeight;
     paMax = toMaxGradeValue(pa[1]) * subjectData[1].semOneWeight + toMaxGradeValue(pa[2]) * subjectData[1].semTwoWeight + toMaxGradeValue(pa[3]) * subjectData[1].semThreeWeight + toMaxGradeValue(pa[4]) * subjectData[1].cwWeight;
     pyMax = toMaxGradeValue(py[1]) * subjectData[0].semOneWeight + toMaxGradeValue(py[2]) * subjectData[0].semTwoWeight + toMaxGradeValue(py[3]) * subjectData[0].semThreeWeight + toMaxGradeValue(py[4]) * subjectData[0].cwWeight;
     chMax = toMaxGradeValue(ch[1]) * subjectData[0].semOneWeight + toMaxGradeValue(ch[2]) * subjectData[0].semTwoWeight + toMaxGradeValue(ch[3]) * subjectData[0].semThreeWeight + toMaxGradeValue(ch[4]) * subjectData[0].cwWeight;
     mtMax = toMaxGradeValue(mt[1]) * subjectData[0].semOneWeight + toMaxGradeValue(mt[2]) * subjectData[0].semTwoWeight + toMaxGradeValue(mt[3]) * subjectData[0].semThreeWeight + toMaxGradeValue(mt[4]) * subjectData[0].cwWeight;
      
     return(
         <ScrollView style={{flex:1}}>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               <SubjectResult title="Pengajian AM Minimum Result" result="min" isLastItem={false} marks={paMin} />
               <SubjectResult title="Pengajian AM Maximum Result" result="max" isLastItem={false} marks={paMax} />
               <SubjectResult title="Phy/Bio Minimum Result" result="min" isLastItem={false} marks={pyMin} />
               <SubjectResult title="Phy/Bio Maximum Result" result="max" isLastItem={false} marks={pyMax} />
               <SubjectResult title="Chemistry Minimum Result" result="min" isLastItem={false} marks={chMin} />
               <SubjectResult title="Chemistry Maximum Result" result="max" isLastItem={false} marks={chMax} />
               <SubjectResult title="Math T Minimum Result" result="min" isLastItem={false} marks={mtMin} />
               <SubjectResult title="Math T Maximum Result" result="max" isLastItem={false} marks={mtMax} />
               <OverallResult title="Overall Min" result="min" isLastItem={false} m1={mtMin} m2={paMin} m3={pyMin} m4={chMin}/>
               <OverallResult title="Overall Max" result="max" isLastItem={true} m1={mtMax}  m2={paMax} m3={pyMax} m4={chMax}/>

            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    col:{
        flex: 1, 
        flexDirection: 'column'
    },
    row:{
        flex:1,
        flexDirection:'row'
    },
    fontSty:{
        fontFamily:'sans-serif',
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        }

  });