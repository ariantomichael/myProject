import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import CheckBox from 'react-native-checkbox';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elements: []};
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
                        this.state.elements.push({
                            text: event.nativeEvent.text,
                            checked: false,
                        });
                        this.setState({elements: this.state.elements});
                        this.clearText();
                    }}
                />
                {this.state.elements.map((elem) =>
                        <CheckBox
                            checked={elem.checked}
                            label={elem.text}
                            onChange={(checked) => {
                                elem.checked = !checked;
                                this.setState({elements: this.state.elements});
                            }}/>

                )}
                <Button title="Delete checked task(s)" onPress={() => {
                    this.setState({elements: this.state.elements.filter(elem => !elem.checked)});
                }
                } key='delete'>
                </Button>

                <Button title="console log" onPress={() => {
                    console.log(this.state.elements);
                }
                } key='log'>
                </Button>
            </View>
        );
    }
}
