import React, { Component } from 'react';
import { View, ScrollView, Keyboard, RefreshControl } from 'react-native';
import { Header } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { AppText, SuccessInput, Button, ModalPicker } from '../../components';
import I18n from '../../i18n';
import styles from "./styles";
import { addressValidation } from '../../utils/validation';
import { toast } from '../../utils/Toast';
import { update_address, add_address, list_regions } from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { country } from '../../Configuration';


class NewAddress extends Component {

    constructor(props) {
        super(props);
        this.address = props.navigation.getParam()
        this.state = {
            firstname: props.navigation.getParam('firstname', ''),
            lastname: props.navigation.getParam('lastname', ''),
            phone: props.navigation.getParam('telephone', ''),
            country: country,
            region: props.navigation.getParam('region', ''),
            region_id: props.navigation.getParam('region_id', ''),
            city: props.navigation.getParam('city', ''),
            // city_id: props.navigation.getParam('city_id', ''),
            street: props.navigation.getParam('street', ''),
            postcode: props.navigation.getParam('postcode', ''),
            //region_data: null

        }
    }


    static navigationOptions = ({navigation}) => {
        const edit = navigation.getParam('edit', false);

        return {
            title: edit ? I18n.t('editAddress') : I18n.t('newAddress')
        }
    }


    async componentDidMount() {
        await this.props.list_regions();
        //await this.set_current_region();


    }
    // set_current_region = () => {
    //     const selected_region = this.props.regions.find(item => item.id == this.state.region_id);
    //     if (selected_region) {
    //         this.setState({ region_data: selected_region })
    //     }
    // }

    onSubmitEditing = (ref) => {
        Keyboard.dismiss()
        this.refs[ref].focus();
    }
    onChangeText = ({ key, text }) => {
        this.setState({ [key]: text })
    }

    onSaveAddress = () => {
        const { firstname, lastname, phone, region, region_id, city, street, postcode } = this.state;
        const data = { firstname, lastname, phone, region, city, street,  postcode }
        const valid = addressValidation(data);
        if (valid.status == 'invalid') {
            toast(valid.msg);
        } else {
            const { user, navigation } = this.props;
            const address = { ...data, customer_id: user.id, region_id };
            const edit = navigation.getParam('edit', false);
            if (edit) {
                const address_id = navigation.getParam('id', null);
                this.props.update_address({ ...address, address_id }, navigation);

            } else {
                this.props.add_address(address, navigation);

            }

        }
    }

    input_checked = (text) => {
        return text && text.trim().length > 0
    }


    // get_cities = () => {
    //     const { region_id, region_data } = this.state;
    //     const { regions } = this.props;

    //     // let selected_region = regions.find( item=> item.id == region_id );
    //     if (region_data) {
    //         return region_data.cities.map(item => item.value)
    //     } else {
    //         return []
    //     }


    // }

    render() {
        const { firstname, lastname, navigation, phone, region, region_id, city, street, postcode, region_data } = this.state;
        const regions = this.props.regions || []
        const regionsValues = regions.map(item => item.value);

        return (
            <View style={styles.container}>

                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    extraHeight={40}
                    contentContainerStyle={styles.fieldsContainer}
                >
                    <View style={styles.headerContainer} >
                        <AppText style={styles.headerText} >{I18n.t('contactInfo')}</AppText>
                    </View>
                    <View style={styles.infoSection} >
                        <SuccessInput
                            ref="firstname"
                            value={firstname}
                            onChangeText={text => this.onChangeText({ key: 'firstname', text })}
                            required
                            checked={this.input_checked(firstname)}
                            onSubmitEditing={() => this.onSubmitEditing("lastname")}
                            placeholder={I18n.t('firstName')}
                            returnKeyType={"next"}
                        />
                        <SuccessInput
                            ref="lastname"
                            value={lastname}
                            onChangeText={text => this.onChangeText({ key: 'lastname', text })}
                            required
                            checked={this.input_checked(lastname)}
                            onSubmitEditing={() => this.onSubmitEditing("phone")}
                            placeholder={I18n.t('firstName')}
                            returnKeyType={"next"}
                        />
                        <SuccessInput
                            ref="phone"
                            value={phone}
                            onChangeText={text => this.onChangeText({ key: 'phone', text })}
                            checked={this.input_checked(phone)}
                            required
                            placeholder={I18n.t('phone')}
                            returnKeyType={"done"}
                        />
                    </View>


                    <View style={styles.headerContainer} >
                        <AppText style={styles.headerText} >{I18n.t('addressInfo')}</AppText>
                    </View>

                    <View style={styles.infoSection} >
                        <View style={styles.country}  >
                            <AppText style={[styles.countryText]} >{country}</AppText>
                        </View>

                       {  regions && regions.length > 0 ? 
                       
                       <ModalPicker
                            data={regionsValues}
                            headerTitle="Select Your State"
                            label={I18n.t('state')}
                            initialValue={region}
                            required={true}
                            onPress={(item, index) => this.setState({
                                //region_data: regions[index],
                                region: item,
                                region_id: regions[index].id }
                                )}
                        />:
                         <SuccessInput
                            ref="state"
                            value={region}
                            onChangeText={text => this.onChangeText({ key: 'region', text })}
                            required
                            checked={this.input_checked(city)}
                            onSubmitEditing={() => this.onSubmitEditing("city")}
                            placeholder={I18n.t('state')}
                            returnKeyType={"next"}
                        />

}
                        {/* {
                                region_id.length !== 0 &&
                                <ModalPicker
                                    data={this.get_cities()}
                                    headerTitle="Select Your City"
                                    label={I18n.t('city')}
                                    initialValue={city}
                                    required={true}
                                    onPress={(item, index) => this.setState({ city: item, city_id: region_data.cities[index].id })}
                                />} */}




                        <SuccessInput
                            ref="city"
                            value={city}
                            onChangeText={text => this.onChangeText({ key: 'city', text })}
                            required
                            checked={this.input_checked(city)}
                            onSubmitEditing={() => this.onSubmitEditing("street")}
                            placeholder={I18n.t('city')}
                            returnKeyType={"next"}
                        />
                        <SuccessInput
                            ref="street"
                            value={street}
                            onChangeText={text => this.onChangeText({ key: 'street', text })}
                            checked={this.input_checked(street)}
                            required
                            placeholder={I18n.t('street')}
                            onSubmitEditing={() => this.onSubmitEditing("postcode")}
                            returnKeyType={"next"}
                        />
                        <SuccessInput
                            ref="postcode"
                            value={postcode}
                            onChangeText={text => this.onChangeText({ key: 'postcode', text })}
                            checked={this.input_checked(postcode)}
                            required
                            placeholder={I18n.t('zipCode')}
                            returnKeyType={"done"}
                        />

                    </View>

                    <Button
                        title={I18n.t('saveAddress')}
                        style={styles.saveButton}
                        titleStyle={styles.saveButtonText}
                        onPress={() => this.onSaveAddress()}
                    />

                </KeyboardAwareScrollView>

            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user,
        regions: state.addresses.regions,
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        update_address,
        add_address,
        list_regions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);








