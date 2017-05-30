import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elements: [ { id: "", text: "" } ]};
        this.clearText = this.clearText.bind(this);
    }

    clearText() {
        this._textInput.setNativeProps({value: ''});
    }

    render() {
        return (
            <View style={{padding: 10}}>

                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 40}}
                    clearTextOnFocus={true}
                    placeholder="Type here your tasks!"
                    returnKeyLabel='done'
                    defaultValue=''
                    onSubmitEditing={(event) => {
                        this.state.elements.push({ id: event.nativeEvent.text, text: event.nativeEvent.text });
                        this.setState({elements: this.state.elements});
                        this.clearText();

                    }}
                />
                {this.state.elements.map((elem) => <Text key={elem.id}>{elem.text}</Text>)}
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
