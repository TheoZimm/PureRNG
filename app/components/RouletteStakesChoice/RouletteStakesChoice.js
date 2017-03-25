import React, { Component} from 'react';
import rouletteEvents from '../../utils/RouletteViewEvents';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'

class RouletteStakesChoice extends Component {

    constructor (props) {
        super(props);

        // Set the animation container
        this.state = {
            options : [
                10,
                20,
                50,
                100
            ],
        };

    }

    setSelectedOption(selectedOption) {
        this.props.onChange(selectedOption);
    }

    renderOption(option, selected, onSelect, index) {
        const style = selected ? {fontWeight: 'bold'} : {
            color: '#fff',
            fontFamily:'sans-serif-light',
        };

        return (

            <TouchableWithoutFeedback onPress={onSelect} key={index} >
                <View style={styles.stake} >
                    <Text style={style}>{option}</Text>
                </View>
            </TouchableWithoutFeedback>

        );
    }

    renderContainer(optionNodes){
        return <View style={styles.stakesContainer}>{optionNodes}</View>;
    }

    render() {

        return (
            <View style={styles.stakesContainer}>
                <RadioButtons

                    options={ this.state.options }
                    onSelection={ this.setSelectedOption.bind(this) }
                    selectedOption={this.props.value }
                    renderOption={ this.renderOption }
                    renderContainer={ this.renderContainer }
                />
            </View>
        );
    }
};

export default RouletteStakesChoice;