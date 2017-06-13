import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elements: []};
        this.itemCount = 0;
        this.clearText = this.clearText.bind(this);
    }

    clearText() {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{padding: 30, backgroundColor: "yellow"}}>

                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, fontSize: 22}}
                    clearTextOnFocus={true}
                    placeholder="Type here your tasks!"
                    returnKeyLabel='done'
                    defaultValue=''
                    onSubmitEditing={(event) => {
                        if(event.nativeEvent.text=="") return;
                        this.state.elements.push({id: (this.itemCount++).toString(), text: event.nativeEvent.text});
                        this.setState({elements: this.state.elements});
                        this.clearText();
                    }}
                />
                {this.state.elements.map((elem) =>
                    <Button title={elem.text} onPress={() => {
                        this.state.elements.splice(this.state.elements.findIndex(el => el.id == elem.id), 1);
                        this.setState({elements: this.state.elements});
                    }
                    } key={elem.id}>
                    </Button>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
