import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
class HeaderBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'lightgreen',borderBottomColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontFamily:'sans-serif',color:'white',fontSize:25}}>{this.props.title}</Text>
            </View>
        )
    }
}
class CourseButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{alignItems:'center',marginTop:10,marginBottom:this.props.firstItem ? 0 : 10,flex:1}}>
            <TouchableOpacity  style={{backgroundColor:'lightgreen',flex:1,width:'95%',justifyContent:'center',alignItems:'center'}}
            title="Science"
            onPress={()=>{
                this.props.onPress();
            }} >
            <Text style={{fontSize:33,fontWeight:'bold',fontFamily:'sans-serif',color:'white'}}>{this.props.title}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle : <HeaderBar title='Course'/>
      };
    render() {
        
        return (
            <View style={styles.col}>
           <CourseButton title='Science' firstItem={true} onPress={()=>{
               this.props.navigation.navigate('Science')
           }}/>
           <CourseButton title='Sastera' firstItem={false} onPress={()=>{
               alert('aliran sastera not available yet!')
           }}/>
          </View>
        );
     
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
        fontSize:30,
        marginLeft:10}

  });