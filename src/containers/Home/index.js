import React, { Component } from 'react';
import { View, BackHandler, Alert ,FlatList } from 'react-native';
import I18n from "../../i18n";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchHomeLayout } from '../../redux/actions';
import Layout from './Layout';
import styles from './styles';
import { toast } from '../../utils/Toast';




class Home extends Component {

    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props);
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackPressed)
        );
        this.renderHomeLayout = this.renderHomeLayout.bind(this);
        this.getHomeLayout = this.getHomeLayout.bind(this);
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', () =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed));
        this.getHomeLayout();
    }

    getHomeLayout = () => {
        this.props.fetchHomeLayout();
    }

    onBackPressed = () => {
        const { routeName } = this.props.navigation.state;
        if (routeName == 'HomeScreen') {
            Alert.alert('', I18n.t('exitApp'),
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel' },
                    { text: 'OK', onPress: () => BackHandler.exitApp() },
                ],
            );
            return true;
        } else {
            return false
        }
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
    }

    renderHomeLayout = ({ item }) => {
        return <Layout row={item} navigation={this.props.navigation} />
    }


    render() {
        const { layouts } = this.props;
        return (
            <View style={styles.container} >
                <FlatList
                    data={layouts}
                    renderItem={this.renderHomeLayout}
                    keyExtractor={item => JSON.stringify(item.id)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => `item--${item.id}--${index}`}
                />
            </View>
        );
    }

}

const mapStateToProps = state => {
    return {
        layouts: state.home.layouts,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchHomeLayout
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
