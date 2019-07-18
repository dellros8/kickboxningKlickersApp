import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { klickersStyles } from '../styles';
import { connect } from 'react-redux';
import { updateKlickers } from '../redux/actions/klicker-actions';
import { updateProtokoll } from '../redux/actions/protokoll-actions';

class Klickers extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
    }

    this.onUpdateKlickers = this.onUpdateKlickers.bind(this);
    this.roundReport = this.roundReport.bind(this);
    this.calculateProtokoll = this.calculateProtokoll.bind(this);

  }

  calculateProtokoll() {
    let fullState = Object.assign({}, this.props.protokoll);
    let tempObj = Object.assign({}, this.props.klickers);

    let redKlicks = this.props.klickers.red.klicker;
    let blueKlicks = this.props.klickers.blue.klicker;

    let difference = Math.abs(redKlicks - blueKlicks);

    let pointsLoss = null;

    if (difference >= 3) {
      pointsLoss = 1
    }
    if (difference >= 6) {
      pointsLoss = 2
    }
    if (difference >= 9) {
      pointsLoss = 3
    }



    if (tempObj.rond === 1) {

      fullState = { red: { winner: false, total: "", roundOne: { points: "", penalty: "", sum: "", }, roundTwo: { points: "", penalty: "", sum: "", }, roundThree: { points: "", penalty: "", sum: "", }, }, blue: { winner: false, total: "", roundOne: { points: "", penalty: "", sum: "", }, roundTwo: { points: "", penalty: "", sum: "", }, roundThree: { points: "", penalty: "", sum: "", }, } }

      if (redKlicks > blueKlicks && difference >= 3) {
        fullState.red.roundOne.points = 10
        fullState.red.roundOne.sum = 10 - tempObj.red.penalty

        fullState.blue.roundOne.points = 10 - pointsLoss
        fullState.blue.roundOne.sum = 10 - tempObj.blue.penalty - pointsLoss
      } else if (blueKlicks > redKlicks && difference >= 3) {

        fullState.red.roundOne.points = 10 - pointsLoss
        fullState.red.roundOne.sum = 10 - tempObj.red.penalty - pointsLoss

        fullState.blue.roundOne.points = 10
        fullState.blue.roundOne.sum = 10 - tempObj.blue.penalty
      } else {
        fullState.red.roundOne.points = 10
        fullState.red.roundOne.sum = 10 - tempObj.red.penalty

        fullState.blue.roundOne.points = 10
        fullState.blue.roundOne.sum = 10 - tempObj.blue.penalty
      }

      fullState.red.roundOne.penalty = tempObj.red.penalty
      fullState.blue.roundOne.penalty = tempObj.blue.penalty
      fullState.red.roundOne.klickers = redKlicks
      fullState.blue.roundOne.klickers = blueKlicks

    }

    if (tempObj.rond === 2) {
      if (redKlicks > blueKlicks && difference >= 3) {

        fullState.red.roundTwo.points = 10
        fullState.red.roundTwo.sum = 10 - tempObj.red.penalty

        fullState.blue.roundTwo.points = 10 - pointsLoss
        fullState.blue.roundTwo.sum = 10 - tempObj.blue.penalty - pointsLoss

      } else if (blueKlicks > redKlicks && difference >= 3) {

        fullState.red.roundTwo.points = 10 - pointsLoss
        fullState.red.roundTwo.sum = 10 - tempObj.red.penalty - pointsLoss

        fullState.blue.roundTwo.points = 10
        fullState.blue.roundTwo.sum = 10 - tempObj.blue.penalty

      } else {
        fullState.red.roundTwo.points = 10
        fullState.red.roundTwo.sum = 10 - tempObj.red.penalty

        fullState.blue.roundTwo.points = 10
        fullState.blue.roundTwo.sum = 10 - tempObj.blue.penalty
      }

      fullState.red.roundTwo.penalty = tempObj.red.penalty
      fullState.blue.roundTwo.penalty = tempObj.blue.penalty
      fullState.red.roundTwo.klickers = redKlicks
      fullState.blue.roundTwo.klickers = blueKlicks
    }

    if (tempObj.rond === 3) {
      if (redKlicks > blueKlicks && difference >= 3) {
        fullState.red.roundThree.points = 10
        fullState.red.roundThree.sum = 10 - tempObj.red.penalty

        fullState.blue.roundThree.points = 10 - pointsLoss
        fullState.blue.roundThree.sum = 10 - tempObj.blue.penalty - pointsLoss
      } else if (blueKlicks > redKlicks && difference >= 3) {
        fullState.red.roundThree.points = 10 - pointsLoss
        fullState.red.roundThree.sum = 10 - tempObj.red.penalty - pointsLoss

        fullState.blue.roundThree.points = 10
        fullState.blue.roundThree.sum = 10 - tempObj.blue.penalty
      } else {
        fullState.red.roundThree.points = 10
        fullState.red.roundThree.sum = 10 - tempObj.red.penalty

        fullState.blue.roundThree.points = 10
        fullState.blue.roundThree.sum = 10 - tempObj.blue.penalty
      }

      fullState.red.roundThree.penalty = tempObj.red.penalty
      fullState.blue.roundThree.penalty = tempObj.blue.penalty
      fullState.red.roundThree.klickers = redKlicks
      fullState.blue.roundThree.klickers = blueKlicks

      fullState.red.total = fullState.red.roundOne.sum + fullState.red.roundTwo.sum + fullState.red.roundThree.sum
      fullState.blue.total = fullState.blue.roundOne.sum + fullState.blue.roundTwo.sum + fullState.blue.roundThree.sum

      tempObj.rond = 1;
      // set klickers total
      let redKlickersTotal = fullState.red.roundOne.klickers + fullState.red.roundTwo.klickers + fullState.red.roundThree.klickers
      let blueKlickersTotal = fullState.blue.roundOne.klickers + fullState.blue.roundTwo.klickers + fullState.blue.roundThree.klickers
      fullState.red.klickersTotal = redKlickersTotal;
      fullState.blue.klickersTotal = blueKlickersTotal;

      // declare winner

      if (fullState.blue.total > fullState.red.total) {
        fullState.blue.winner = true
      } else if (fullState.red.total > fullState.blue.total) {
        fullState.red.winner = true
      } else if (fullState.red.total === fullState.blue.total) {
        if (blueKlickersTotal > redKlickersTotal) {
          fullState.blue.winner = true
        } else if (redKlickersTotal > blueKlickersTotal) {
          fullState.red.winner = true
        } else if (redKlickersTotal === blueKlickersTotal) {
          // handle no winner
        }
      }


    } else {
      tempObj.rond = tempObj.rond + 1
    }

    tempObj.red = {
      klicker: 0,
      penalty: 0
    };
    tempObj.blue = {
      klicker: 0,
      penalty: 0
    }

    this.props.onUpdateKlickers(tempObj)
    this.props.onUpdateProtokoll(fullState)
  }

  roundReport() {
    Alert.alert(
      'OBS!',
      `Vill du skicka rond ${this.props.klickers.rond} till protokollet?`,
      [
        {
          text: 'Ja', onPress: () => {
            if (this.props.klickers.rond === 3) {
              this.props.navigation.navigate('Protokoll');
            }
            this.calculateProtokoll()
          }
        },
        { text: 'Nej', onPress: () => alert('no'), style: 'cancel' }
      ],
      { cancelable: true }
    )
  }

  handleClick() {
    this.props.navigation.navigate('Protokoll')
  }

  onUpdateKlickers(string) {

    var tempObj = Object.assign({}, this.props.klickers);

    if (string === "blueincr") {
      tempObj.blue.klicker += 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "redincr") {
      tempObj.red.klicker += 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "bluedecr" && !tempObj.blue.klicker <= 0) {
      tempObj.blue.klicker -= 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "reddecr" && !tempObj.red.klicker <= 0) {
      tempObj.red.klicker -= 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "blueincrpen") {
      tempObj.blue.penalty += 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "redincrpen") {
      tempObj.red.penalty += 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "bluedecrpen" && !tempObj.blue.penalty <= 0) {
      tempObj.blue.penalty -= 1
      this.props.onUpdateKlickers(tempObj)
    } else if (string === "reddecrpen" && !tempObj.red.penalty <= 0) {
      tempObj.red.penalty -= 1
      this.props.onUpdateKlickers(tempObj)
    }
  }



  render() {
    return (
      <View style={klickersStyles.container}>
        <TouchableOpacity style={klickersStyles.button} onPress={() => this.handleClick()}>
          <Text style={{ fontStyle: "italic" }}>protokoll</Text>
          <Image style={{ width: 45, height: 25, transform: [{ rotate: "180deg" }] }} source={require("../images/arrow.png")}></Image>
        </TouchableOpacity>

        <View style={klickersStyles.redSideKlickers}>
          <View style={klickersStyles.flexcenter}>
            <Text style={klickersStyles.pointsCount}>{this.props.klickers.red.klicker}</Text>
            <View style={klickersStyles.klickers}>
              <TouchableOpacity style={[klickersStyles.klickerIncr, klickersStyles.red]} onPress={() => this.onUpdateKlickers("redincr")}>
                <SvgUri source={require("../images/plus.svg")} alt="plus"></SvgUri>
              </TouchableOpacity>
              <TouchableOpacity style={[klickersStyles.klickerDecr, klickersStyles.red]} onPress={() => this.onUpdateKlickers("reddecr")}>
                <SvgUri source={require("../images/minus.svg")} alt="minus"></SvgUri>
              </TouchableOpacity>
            </View>
            <View style={klickersStyles.penaltyWrapper}>
              <Text>Poängavdrag</Text>
              <Text style={{ marginBottom: 5, marginTop: 5 }}>{this.props.klickers.red.penalty}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={klickersStyles.penaltyKlicker} onPress={() => this.onUpdateKlickers("redincrpen")}><Text>+</Text></TouchableOpacity>
                <TouchableOpacity style={klickersStyles.penaltyKlicker} onPress={() => this.onUpdateKlickers("reddecrpen")}><Text>-</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="middlePageKlickers">
          <Text style={{ fontSize: 34 }}>Rond {this.props.klickers.rond}</Text>
          <TouchableOpacity style={klickersStyles.roundDoneButton} onPress={this.roundReport}><Text>Rond klar</Text></TouchableOpacity>
        </View>

        <View style={klickersStyles.blueSideKlickers}>
          <View style={klickersStyles.flexcenter}>
            <Text style={klickersStyles.pointsCount}>{this.props.klickers.blue.klicker}</Text>
            <View style={klickersStyles.klickers}>
              <TouchableOpacity style={[klickersStyles.klickerIncr, klickersStyles.blue]} onPress={() => this.onUpdateKlickers("blueincr")}>
                <SvgUri source={require("../images/plus.svg")} alt="plus"></SvgUri>
              </TouchableOpacity>
              <TouchableOpacity style={[klickersStyles.klickerDecr, klickersStyles.blue]} onPress={() => this.onUpdateKlickers("bluedecr")}>
                <SvgUri source={require("../images/minus.svg")} alt="minus"></SvgUri>
              </TouchableOpacity>
            </View>
            <View style={klickersStyles.penaltyWrapper}>
              <Text>Poängavdrag</Text>
              <Text style={{ marginBottom: 5, marginTop: 5 }}>{this.props.klickers.blue.penalty}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={klickersStyles.penaltyKlicker} onPress={() => this.onUpdateKlickers("blueincrpen")}><Text>+</Text></TouchableOpacity>
                <TouchableOpacity style={klickersStyles.penaltyKlicker} onPress={() => this.onUpdateKlickers("bluedecrpen")}><Text>-</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>


    );
  }
}

const mapStateToProps = (state) => ({
  klickers: state.klickers,
  protokoll: state.protokoll
});

const mapActionsToProps = {
  onUpdateKlickers: updateKlickers,
  onUpdateProtokoll: updateProtokoll
}

export default connect(mapStateToProps, mapActionsToProps)(Klickers);