import { GetRequest, PutRequest } from 'lib/api/requests';
import { observable } from 'mobx';
import { ExperimentType, StatusType } from 'types/experiment';

const ExperimentStore = observable({
	experimentList: [] as ExperimentType[],
	experimentDetail: {} as ExperimentType | undefined,
	setExperimentList(experimentList: ExperimentType[]) {
		this.experimentList = experimentList;
	},
	setExperimentDetail(experiment: ExperimentType | undefined) {
		this.experimentDetail = experiment;
	},

	async getExperimentList(lingual?: string, status?: StatusType, available?: boolean) {
		console.log(available);
		let success = false;
		try {
			this.setExperimentList([]);
			const response = await GetRequest('experiments/', {
				lingual: lingual && lingual.length > 0 ? lingual : undefined,
				status,
				is_full: available ? false : undefined,
			});
			this.setExperimentList(response.data);
			// console.error('========= getExperimentList Success =========');
			success = true;
		} catch (e) {
			console.error('========= getExperimentList Error =========');
			console.error(e);
		}
		return success;
	},

	async getExperimentDetail(id: number) {
		let success = false;
		try {
			this.setExperimentDetail(undefined);
			const response = await GetRequest(`experiments/${id}/`);
			this.setExperimentDetail(response.data);
			// console.error('========= getExperimentDetail Success =========');
			success = true;
		} catch (e) {
			console.error('========= getExperimentDetail Error =========');
			console.error(e);
		}
		return success;
	},

	async putExperimentDetail(id: number) {
		let success = false;
		try {
			const response = await PutRequest(`experiments/${id}`);
			// console.error('========= getExperimentDetail Success =========');
			if (response.data === 200) success = true;
		} catch (e) {
			console.error('========= getExperimentDetail Error =========');
			console.error(e);
		}
		return success;
	},
});

export default ExperimentStore;