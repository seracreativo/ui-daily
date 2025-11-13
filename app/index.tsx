import { Link } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaView>
			<View className='p-4'>
				<Link href={`/daily/ui-001`} className='text-lg'>
					Daily UI 001
				</Link>
			</View>
		</SafeAreaView>
	);
}
