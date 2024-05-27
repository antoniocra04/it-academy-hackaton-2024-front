export interface Disscussion {
	id: string;
	clubId: string;
	title: string;
	description: string;
	fullDescriptionl: string;
	comments: Comment[];
}

export interface Comment {
	id: string;
	disscussionId: string;
	userId: string;
	logginUser: string;
	commentariy: string;
}
