import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<ProfileCard />
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
