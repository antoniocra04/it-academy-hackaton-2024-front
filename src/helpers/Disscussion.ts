export interface Disscussion {
	id: string;
	clubId: string;
	title: string;
	description: string;
	fullDescription: string;
	creatorId: string;
	comments: Comment[];
}

export interface Comment {
	id: string;
	disscussionId: string;
	userId: string;
	logginUser: string;
	commentariy: string;
}
