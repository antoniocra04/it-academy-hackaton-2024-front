import { Event } from './Event';

export interface Club {
	id: string;
	title: string;
	description: string;
	creatorClubID: string;
	events: {
		$values: Event[];
	};
}
