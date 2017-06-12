import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {elements: [ { id: "", text: "", clear:false } ]};
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
                        this.state.elements.push({ id: event.nativeEvent.text, text: event.nativeEvent.text });
                        this.setState({elements: this.state.elements});
                        this.clearText();

                    }}
                />
                {this.state.elements.map((elem) =>
                    <Button title={elem.id} onPress={() => {this.state.elements.clear = true} } key={elem.id}>

                         {elem.text}
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
