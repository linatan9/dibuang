import React, {Component} from 'react';
import {View, Modal, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddingBottom: 10,
      counter: 0
    };
  }

  componentWillReceiveProps(props) {
    if (props.fullSize && this.state.paddingBottom !== 0) {
      this.setState({paddingBottom: 5});
      setTimeout(() => {
        this.setState({paddingBottom: 0});
      }, 1000);
    }
  }

  render() {
    const {showModal, modalHeaderText, onHideModal, children, fullSize, isLoader} = this.props;
    return (
      <Modal anymationType={'slide'} transparent visible={showModal} onRequestClose={onHideModal}>
        <TouchableWithoutFeedback onPress={onHideModal}>
          <View style={styles.modalBecksideContainer} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer} pointerEvents="box-none">
          {
            isLoader ? (
              <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                {children}
              </View>
            ) : (
              <View style={fullSize ? [styles.fullSizeModal, {paddingBottom: this.state.paddingBottom, marginBottom: this.state.paddingBottom}] : styles.modalWindow}>
                <Text style={styles.headerText}>{modalHeaderText}</Text>
                {children}
              </View>
            )
          }
        </View>
      </Modal>
    );
  }
}

export default ModalView;
