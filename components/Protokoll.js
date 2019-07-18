import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { protokollStyles } from '../styles';
import { updateProtokoll } from '../redux/actions/protokoll-actions';

import { connect } from 'react-redux';

class Protokoll extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {

    }

    this.resetMatch = this.resetMatch.bind(this);
  }

  resetMatch() {

  }

  handleClick() {
    this.props.navigation.navigate('Klickers')
  }


  render() {

    let isZeroOne = function() {
      if (this.props.protokoll.blue.roundOne.points > 0) {
        return true
      } else {
        return false
      }
    }
    let isZeroTwo = function() {
      if (this.props.protokoll.blue.roundTwo.points > 0) {
        return true
      } else {
        return false
      }
    }
    let isZeroThree = function() {
      if (this.props.protokoll.blue.roundThree.points > 0) {
        return true
      } else {
        return false
      }
    }

    var nbsp = String.fromCharCode(160)

    return (
      <View style={protokollStyles.container}>
        <View style={protokollStyles.redSideProtocol}>
          <Text h2 style={{ color: "red", fontSize: 34 }}>Röd</Text>
          <View style={protokollStyles.redScoresTable}>
            <View>
              <Text>Klickers</Text>
              <Text style={{ padding: 10 }}>{isZeroOne && this.props.protokoll.red.roundOne.klickers === 0 ? "0" : this.props.protokoll.red.roundOne.klickers || nbsp}</Text>
              <Text style={{ padding: 10 }}>{isZeroTwo && this.props.protokoll.red.roundTwo.klickers === 0 ? "0" : this.props.protokoll.red.roundTwo.klickers || nbsp}</Text>
              <Text style={{ padding: 10 }}>{isZeroThree && this.props.protokoll.red.roundThree.klickers === 0 ? "0" : this.props.protokoll.red.roundThree.klickers || nbsp}</Text>
              <Text style={{ padding: 10 }}>{this.props.protokoll.red.klickersTotal || nbsp}</Text>
            </View>

            <View>
              <Text>Poäng</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundOne.points || nbsp}</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundTwo.points || nbsp}</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundThree.points || nbsp}</Text>
            </View>

            <View>
              <Text>Poängavdrag</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundOne.penalty || nbsp}</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundTwo.penalty || nbsp}</Text>
              <Text style={ protokollStyles.protokollParagraphs }>{this.props.protokoll.red.roundThree.penalty || nbsp}</Text>
              <Text>Totalt:</Text>
              {this.props.protokoll.red.winner === true ? <Text style={protokollStyles.redWinner}>VINNARE</Text> : null}
            </View>

            <View>
              <Text>Summa</Text>
              <Text>{this.props.protokoll.red.roundOne.sum || nbsp}</Text>
              <Text>{this.props.protokoll.red.roundTwo.sum || nbsp}</Text>
              <Text>{this.props.protokoll.red.roundThree.sum || nbsp}</Text>
              <Text>{this.props.protokoll.red.total}</Text>
            </View>

          </View>
        </View>

        <View style={protokollStyles.middlePageProtocol}>
          <TouchableOpacity style={protokollStyles.newMatch} onPress={this.resetMatch}><Text>Ny Match</Text></TouchableOpacity>
          <Text style={{fontSize: 34 }}>&nbsp;</Text>
          <Text>Rond</Text>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </View>

        <View style={protokollStyles.blueSideProtocol}>
          <Text h2 style={{ color: "blue", fontSize: 34 }}>Blå</Text>
          <View style={protokollStyles.blueScoresTable}>
            <View>
              <Text>Poäng</Text>
              <Text>{this.props.protokoll.blue.roundOne.points || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundTwo.points || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundThree.points || nbsp}</Text>
            </View>

            <View>
              <Text>Poängavdrag</Text>
              <Text>{this.props.protokoll.blue.roundOne.penalty || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundTwo.penalty || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundThree.penalty || nbsp}</Text>
              <Text>Totalt:</Text>
              {this.props.protokoll.blue.winner === true ? <Text style={protokollStyles.blueWinner}>VINNARE</Text> : null}
            </View>

            <View>
              <Text>Summa</Text>
              <Text>{this.props.protokoll.blue.roundOne.sum || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundTwo.sum || nbsp}</Text>
              <Text>{this.props.protokoll.blue.roundThree.sum || nbsp}</Text>
              <Text>{this.props.protokoll.blue.total}</Text>
            </View>

            <View>
              <Text>Klickers</Text>
              <Text>{isZeroOne && this.props.protokoll.blue.roundOne.klickers === 0 ? "0" : this.props.protokoll.blue.roundOne.klickers || nbsp}</Text>
              <Text>{isZeroTwo && this.props.protokoll.blue.roundTwo.klickers === 0 ? "0" : this.props.protokoll.blue.roundTwo.klickers || nbsp}</Text>
              <Text>{isZeroThree && this.props.protokoll.blue.roundThree.klickers === 0 ? "0" : this.props.protokoll.blue.roundThree.klickers || nbsp}</Text>
              <Text>{this.props.protokoll.blue.klickersTotal || nbsp}</Text>
            </View>

          </View>
        </View>
        <TouchableOpacity style={protokollStyles.button} onPress={() => this.handleClick()}>
          <Text style={{ fontStyle: "italic" }}>klickers</Text>
          <Image style={{ width: 45, height: 25 }} source={require("../images/arrow.png")}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  protokoll: state.protokoll
});

const mapActionsToProps = {
  onUpdateProtokoll: updateProtokoll
}

export default connect(mapStateToProps, mapActionsToProps)(Protokoll)