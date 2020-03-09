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
      <SafeAreaView style={protokollStyles.container}>
        <View style={protokollStyles.redSideProtocol}>
          <Text h2 style={{ color: "red", fontSize: 40, height: 50 }}>Röd</Text>
          <View style={protokollStyles.redScoresTable}>
            <View style={{width: "25%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Klickers</Text>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0, fontSize: 24, textAlign: "center" }}>{isZeroOne && this.props.protokoll.red.roundOne.klickers === 0 ? "0" : this.props.protokoll.red.roundOne.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0, fontSize: 24, textAlign: "center" }}>{isZeroTwo && this.props.protokoll.red.roundTwo.klickers === 0 ? "0" : this.props.protokoll.red.roundTwo.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0, fontSize: 24, textAlign: "center" }}>{isZeroThree && this.props.protokoll.red.roundThree.klickers === 0 ? "0" : this.props.protokoll.red.roundThree.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.klickersTotal || nbsp}</TextInput>
            </View>

            <View style={{width: "20%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Poäng</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundOne.points || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundTwo.points || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderBottomWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundThree.points || nbsp}</TextInput>
            </View>

            <View style={{width: "35%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Poängavdrag</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundOne.penalty || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundTwo.penalty || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderBottomWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundThree.penalty || nbsp}</TextInput>
              <Text style={{ padding: 10, fontSize: 24, textAlign: "center"}}>Totalt:</Text>
              {this.props.protokoll.red.winner === true ? <Text style={protokollStyles.redWinner}>VINNARE</Text> : null}
            </View>

            <View style={{width: "20%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Summa</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderRightWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundOne.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderRightWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundTwo.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderRightWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.roundThree.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.red.total || nbsp}</TextInput>
            </View>

          </View>
        </View>

        <View style={protokollStyles.middlePageProtocol}>
          <TouchableOpacity style={protokollStyles.newMatch} onPress={this.resetMatch}><Text>Ny Match</Text></TouchableOpacity>
          <Text style={{ height: 20, marginTop: 65, textAlign: "center" }}>Rond</Text>
          <Text style={{fontSize: 40, height: 50, }}>1</Text>
          <Text style={{fontSize: 40, height: 50, }}>2</Text>
          <Text style={{fontSize: 40, height: 50, }}>3</Text>
        </View>

        <View style={protokollStyles.blueSideProtocol}>
          <Text h2 style={{ color: "blue", fontSize: 40, height: 50 }}>Blå</Text>
          <View style={protokollStyles.blueScoresTable}>
            <View style={{width: "20%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Poäng</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderLeftWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundOne.points || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderLeftWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundTwo.points || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundThree.points || nbsp}</TextInput>
            </View>

            <View style={{width: "35%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Poängavdrag</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundOne.penalty || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundTwo.penalty || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, borderBottomWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundThree.penalty || nbsp}</TextInput>
              <Text style={{ padding: 10, fontSize: 24, textAlign: "center"}}>Totalt:</Text>
              {this.props.protokoll.blue.winner === true ? <Text style={protokollStyles.blueWinner}>VINNARE</Text> : null}
            </View>

            <View style={{width: "20%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Summa</Text>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundOne.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundTwo.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.roundThree.sum || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderTopWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.total || nbsp}</TextInput>
            </View>

            <View style={{width: "25%"}}>
              <Text style={{ height: 20, textAlign: "center" }}>Klickers</Text>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0, fontSize: 24, textAlign: "center" }}>{isZeroOne && this.props.protokoll.blue.roundOne.klickers === 0 ? "0" : this.props.protokoll.blue.roundOne.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0,fontSize: 24, textAlign: "center" }}>{isZeroTwo && this.props.protokoll.blue.roundTwo.klickers === 0 ? "0" : this.props.protokoll.blue.roundTwo.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, borderBottomWidth: 0,fontSize: 24, textAlign: "center" }}>{isZeroThree && this.props.protokoll.blue.roundThree.klickers === 0 ? "0" : this.props.protokoll.blue.roundThree.klickers || nbsp}</TextInput>
              <TextInput editable={false} style={{ padding: 10, borderWidth: 1, fontSize: 24, textAlign: "center" }}>{this.props.protokoll.blue.klickersTotal || nbsp}</TextInput>
            </View>

          </View>
        </View>
        <TouchableOpacity style={protokollStyles.button} onPress={() => this.handleClick()}>
          <Text style={{ fontStyle: "italic" }}>Klickers</Text>
        </TouchableOpacity>
      </SafeAreaView>
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