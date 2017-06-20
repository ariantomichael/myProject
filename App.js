import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elements: [],isChecked:[]};
        this.itemCount = 0;
        this.clearText = this.clearText.bind(this);
    }
    clearText() {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{padding: 30}}>

                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, fontSize: 22}}
                    clearTextOnFocus={true}
                    placeholder="Type here your tasks!"
                    returnKeyLabel='done'
                    defaultValue=''
                    onSubmitEditing={(event) => {
                        if (event.nativeEvent.text == "") return;
                        this.state.elements.push({id: (this.itemCount++).toString(), text: event.nativeEvent.text});
                        this.setState({elements: this.state.elements});
                        this.clearText();
                    }}
                />
                {this.state.elements.map((elem) =>
                    <CheckBox
                        label={elem.text}
                        onChange={(checked) => {
                            if(!checked) {
                                this.state.isChecked.push({id: elem.id, ischecked: !checked});
                                this.setState({isChecked: this.state.isChecked});
                            }else{
                                this.state.isChecked.splice(this.state.isChecked.findIndex(i => i.id==elem.id),1);
                                this.setState({isChecked: this.state.isChecked});
                            }
                        }}/>

                )}
                <Button title="delete checked task(s)" onPress={() => {
                    this.state.isChecked.forEach( element => {
                        this.state.elements.splice(this.state.elements.findIndex(el => el.id == element.id ),1);
                    });
                    this.setState({elements: this.state.elements, isChecked:[]});

                }
                } key='delete'>
                </Button>

                <Button title="console log" onPress={() => {
                    console.log(this.state.isChecked);
                    console.log(this.state.elements);
                }
                } key='log'>
                </Button>
            </View>
        );
    }
}