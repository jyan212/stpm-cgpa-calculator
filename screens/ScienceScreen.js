import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Picker,Button} from 'react-native';

class SubjectDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sem1 : 'S1',
            sem2: 'S2',
            sem3: 'S3',
            cw: 'KK',
            changeColor: false,
        }
    }
    changeNoColor(){
        this.setState({
          changeColor: false,  
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.reset == true && this.state.changeColor ){
            this.changeNoColor()
        }
    }
    render(){
        return(
            <View style={[styles.col,
                {width:'95%',height:'15%',marginTop:10,
            backgroundColor: this.state.changeColor ? 'lightgreen':'#8789ff' ,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:3}]}>
                <Text style={styles.fontSty}>{this.props.title}</Text>
             
                <View style={[styles.row,{justifyContent:'center',alignItems:'center'}]}>
                 <Picker 
                  selectedValue={this.state.sem1}
                  style={{height: 50, width: 85}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({sem1: itemValue})}
                  >
                  <Picker.Item  label="S1" value={null}/>
                  <Picker.Item  label="A" value="A"/>
                  <Picker.Item label="A-" value="A-"/>
                  <Picker.Item label="B+" value="B+"/>
                  <Picker.Item label="B" value="B"/>
                  <Picker.Item label="B-" value="B-"/>
                  <Picker.Item label="C+" value="C+"/>
                  <Picker.Item label="C" value="C"/>
                  <Picker.Item label="C-" value="C-"/>
                  <Picker.Item label="D+" value="D+"/>
                  <Picker.Item label="D" value="D"/>
                  <Picker.Item label="F" value="F"/>
                  </Picker>
                  <Picker
                
                  selectedValue={this.state.sem2}
                  style={{height: 50, width: 85}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({sem2: itemValue})}
                  >
                  <Picker.Item  label="S2" value={null}/>
                  <Picker.Item  label="A" value="A"/>
                  <Picker.Item label="A-" value="A-"/>
                  <Picker.Item label="B+" value="B+"/>
                  <Picker.Item label="B" value="B"/>
                  <Picker.Item label="B-" value="B-"/>
                  <Picker.Item label="C+" value="C+"/>
                  <Picker.Item label="C" value="C"/>
                  <Picker.Item label="C-" value="C-"/>
                  <Picker.Item label="D+" value="D+"/>
                  <Picker.Item label="D" value="D"/>
                  <Picker.Item label="F" value="F"/>
                  </Picker>
                  <Picker
                
                  selectedValue={this.state.sem3}
                  style={{height: 50, width: 85}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({sem3: itemValue})}
                  >
                  <Picker.Item  label="S3" value={null}/>
                  <Picker.Item  label="A" value="A"/>
                  <Picker.Item label="A-" value="A-"/>
                  <Picker.Item label="B+" value="B+"/>
                  <Picker.Item label="B" value="B"/>
                  <Picker.Item label="B-" value="B-"/>
                  <Picker.Item label="C+" value="C+"/>
                  <Picker.Item label="C" value="C"/>
                  <Picker.Item label="C-" value="C-"/>
                  <Picker.Item label="D+" value="D+"/>
                  <Picker.Item label="D" value="D"/>
                  <Picker.Item label="F" value="F"/>
                  </Picker>
                  <Picker
                
                  selectedValue={this.state.cw}
                  style={{height: 50, width: 85}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({cw: itemValue})}
                  >
                 <Picker.Item  label="KK" value={null}/>
                 <Picker.Item  label="A" value="A"/>
                  <Picker.Item label="A-" value="A-"/>
                  <Picker.Item label="B+" value="B+"/>
                  <Picker.Item label="B" value="B"/>
                  <Picker.Item label="B-" value="B-"/>
                  <Picker.Item label="C+" value="C+"/>
                  <Picker.Item label="C" value="C"/>
                  <Picker.Item label="C-" value="C-"/>
                  <Picker.Item label="D+" value="D+"/>
                  <Picker.Item label="D" value="D"/>
                  <Picker.Item label="F" value="F"/>
                  </Picker>
                </View>
                <Button title='Done' 
                disabled={this.state.sem1 != 'S1' && this.state.sem2 != 'S2' && this.state.sem3 != 'S3' &&  this.state.cw !='KK' ? false : true}
                onPress={()=>{
                    this.setState({
                        changeColor: true,
                     })

                     subjectArray= [];
                     subjectArray.push(this.props.id,this.state.sem1,this.state.sem2,this.state.sem3,this.state.cw)
                        this.props.getData(subjectArray,1);
                       
                       
                }} />
            </View>
        )
    }
}
var pydataArr = [];
var chdataArr = [];
var mtdataArr = [];
var padataArr = [];
export default class ScienceScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            no:0,
            reset:false,
        }
       
    }
    static navigationOptions = {
        title :'Fill in your results',
        headerStyle: {
            backgroundColor: '#8789ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };
      //accesss to children data
    getDataFromChild = (data,index) => {
        //processData
        this.setState({reset:false})
        if(data[1]!=null && data[2]!=null &&data[3]!=null&&data[4]!=null){
        switch(data[0]){
            case 'pa':
            if(padataArr[0] == null){
            padataArr.push(data);
            this.setState({
                no : this.state.no+=index,
            })
            } else {
                alert('err')
            }
            break;
            case 'py':
            if(pydataArr[0] == null){
            pydataArr.push(data);
            this.setState({
                no : this.state.no+=index,
            })
            }
            break;
            case 'ch':
            if(chdataArr[0] == null){
            chdataArr.push(data);
            this.setState({
                no : this.state.no+=index,
            })
            }
            break;
            case 'mt':
            if(mtdataArr[0] == null){
            mtdataArr.push(data);
            this.setState({
                no : this.state.no+=index,
            })
            }
        }
    } else {
        alert('Please check your '+ data[0]+' data, Did you fill in correctly?')
    }
   
    }
    
 
    //calculator all here
    //1- S1 - 2- S2 - 3- S3 - 4 - kk ; 0 = id

    render() {
        return (
            <View style={[styles.col,{alignItems:'center'}]}>
                <SubjectDisplay id="pa" title="Pengajian Am" getData={this.getDataFromChild} reset={this.state.reset}/>
                <SubjectDisplay id="mt" title="Math T" getData={this.getDataFromChild} reset={this.state.reset}/>
                <SubjectDisplay id="py" title="Physics/Biology" getData={this.getDataFromChild} reset={this.state.reset} />
                <SubjectDisplay id="ch" title="Chemistry" getData={this.getDataFromChild}  reset={this.state.reset}  />
                <View style={styles.row}>
                <TouchableOpacity disabled={this.state.no < 4 ? true : false}
                onPress={()=>{this.props.navigation.navigate('Results',{
                   pa: padataArr,
                   py : pydataArr,
                   mt: mtdataArr,
                   ch: chdataArr,
                })}}
                style={{flex:1,width:'45%',marginTop:10,marginLeft:5,marginBottom:10,backgroundColor: this.state.no==4 ? 'lightgreen':'#8789ff',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.fontSty}>Calculate</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{
                    padataArr = [];
                    pydataArr = [];
                    mtdataArr = [];
                    chdataArr = [];
                    this.setState({
                        no : 0,
                        reset:true,
                    })
                  
                }}
                style={{flex:1,width:'45%',marginTop:10,marginBottom:10,backgroundColor: this.state.no==4 ? 'lightgreen':'#8789ff',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.fontSty}>Reset</Text>
                </TouchableOpacity>
                
                </View>
          </View> 
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
        fontSize:30,
        color:'white',
        }

  });