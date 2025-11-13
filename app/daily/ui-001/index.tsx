import {
	IconChartPieFilled,
	IconCreditCardFilled,
	IconSearch,
} from '@tabler/icons-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	Image,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<Gradient>
			<Header />
		</Gradient>
	);
}

const Gradient = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<LinearGradient
				colors={[
					'#4A76FB',
					'#0315CA',
					'#000264',
					'#00011A',
					'#00011A',
					'#00011A',
				]}
				style={{ flex: 1 }}
			>
				<SafeAreaView edges={['top']} className='flex-1'>
					<ScrollView className='flex-1' contentContainerClassName='p-6 gap-6'>
						{children}
					</ScrollView>
				</SafeAreaView>
			</LinearGradient>
		</>
	);
};

const Header = () => {
	return (
		<>
			<View className='flex flex-row items-center gap-2'>
				<TouchableOpacity>
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						}}
						className='rounded-full w-14 h-14'
					/>
				</TouchableOpacity>
				<View className='flex-1 flex flex-row items-center gap-2 bg-white/30  h-14 rounded-full  px-4'>
					<IconSearch size={24} color={'white'} />
					<TextInput
						placeholder='Search'
						className='flex-1 text-white py-4'
						placeholderTextColor={'white'}
						style={{ fontSize: 18 }}
					/>
				</View>
				<>
					<TouchableOpacity className=' flex-row items-center gap-2 bg-white/30  h-14 aspect-square justify-center rounded-full  '>
						<IconChartPieFilled size={24} color={'white'} />
					</TouchableOpacity>
					<TouchableOpacity className=' flex-row items-center gap-2 bg-white/30  h-14 aspect-square justify-center rounded-full  '>
						<IconCreditCardFilled size={24} color={'white'} />
					</TouchableOpacity>
				</>
			</View>
		</>
	);
};
