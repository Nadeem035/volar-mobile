import {ScrollView, StyleSheet, View, Text } from "react-native";
import { Paragraph ,Card, Title } from 'react-native-paper';
export default function Contact() {
    return (
        <ScrollView>
                <Card style={{
                    paddingVertical: 20,
                }}>
                    <Card.Content>
                        <Title style={{
                            fontSize: 18,
                            color: "#336ab5",
                            fontWeight: 'bold',
                            alignSelf: "center",
                        }}>
                            The History of Valor
                        </Title>
                        <Paragraph>Greg Londo founded and launched Valor Technical Cleaning in January 2020. He received his Bachelor’s degree from the U.S. Military Academy at West Point and saw combat in Iraq, where he was Ranger qualified.
                        After rising through the ranks to Captain, Greg earned the Bronze Star for his service. He has always approached life with a desire to help and serve others and brings that same mentality to Valor. Our team is made up of individuals who share Greg’s commitment to serving the community as he served his country in the military.</Paragraph>
                        <Paragraph>Greg Londo founded and launched Valor Technical Cleaning in January 2020. He received his Bachelor’s degree from the U.S. Military Academy at West Point and saw combat in Iraq, where he was Ranger qualified.
                        After rising through the ranks to Captain, Greg earned the Bronze Star for his service. He has always approached life with a desire to help and serve others and brings that same mentality to Valor. Our team is made up of individuals who share Greg’s commitment to serving the community as he served his country in the military.</Paragraph>
                        <Paragraph>Greg Londo founded and launched Valor Technical Cleaning in January 2020. He received his Bachelor’s degree from the U.S. Military Academy at West Point and saw combat in Iraq, where he was Ranger qualified.
                        After rising through the ranks to Captain, Greg earned the Bronze Star for his service. He has always approached life with a desire to help and serve others and brings that same mentality to Valor. Our team is made up of individuals who share Greg’s commitment to serving the community as he served his country in the military.</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
    );
}
