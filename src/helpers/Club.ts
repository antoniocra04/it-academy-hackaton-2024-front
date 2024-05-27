import { Disscussion } from './Disscussion';
import { Event } from './Event';

export interface Club {
	id: string;
	title: string;
	description: string;
	creatorClubID: string;
	countMembers: number;
	fullDescription: string;
	imagePath: string;
	events: Event[];
	discussions: Disscussion[];
}
