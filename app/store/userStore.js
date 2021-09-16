import httpRequest from '../service/httpRequest';
import { message } from 'antd';
import { makeAutoObservable } from 'mobx';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    userInfo = {};
    infoList = [];
    studentList = [];
    mentorList = [];
    questionList = [];
    auditLogList = [];
    submissionList = [];
    pendingList = [];
    rankLoading = true;
    studentLoading = true;
    questionListLoading = true;
    auditLogLoading = true;
    submissionListLoading = true;
    pendingListLoading = true;

    getInfoList = () => {
        const response = httpRequest.get("/hfuuAcm/getInfo");
        if(response.status === 200 ) {
            this.infoList = response.data.data;
            return true;
        }
    }
    Login = (params) => {
        const response = httpRequest.post("/hfuuAcm/login", params);
        console.log(params);
        if (response.status === 200) {
            sessionStorage["userName"]=params.userName;
            sessionStorage["type"]=response.data.data.type;


            this.userInfo = response.data.data;
            return true;
        }
    }


    fetchStudentList = () => {
        this.rankLoading = true;
        const response = httpRequest.get("/hfuuAcm/studentList");
        if (response.status === 200) {
            this.studentList = response.data.data;
            let index = 0;
            this.studentList.forEach(item => {
                item.rank = ++index;
            })
            message.success(response.data.msg);
            this.rankLoading = false;
            return true;
        }
    }


    fetchMentorList = () => {
        const response = httpRequest.get("/hfuuAcm/mentorList");
        if (response.status === 200) {
            this.mentorList = response.data.data;
            const da = this.mentorList.filter(item => item.id === 1);
            message.success(response.data.msg);
            return true;
        }
    }


    fetchQuestionList = () => {
        this.questionListLoading = true;
        const response = httpRequest.get("/hfuuAcm/questionList");
        this.questionListLoading = false;
        if (response.status === 200) {
            this.questionList = response.data.data;
            message.success(response.data.msg);
            return true;
        }
    }


    updateUser = (Item) => {
        const response = httpRequest.post("/hfuuAcm/updateUser", Item);
        if (response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }

    addMentor = (Item) => {
        const response = httpRequest.post("/hfuuAcm/addMentor", Item);
        if (response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }
    addStudent = (Item) => {
        const response = httpRequest.post("/hfuuAcm/addStudent", Item);
        if (response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }
    addQuestion = (Item) => {
        const response = httpRequest.post("/hfuuAcm/addQuestion", Item);
        if (response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }


    updateQuestion = (Item) => {
        const response = httpRequest.post("/hfuuAcm/updateQuestion",Item);
        if (response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }

    getAuditLog = (Item) => {
        this.auditLogLoading = true;
        const response = httpRequest.get("/hfuuAcm/getAuditLog", Item);
        this.auditLogLoading = false;
        if (response.status === 200) {
            this.auditLogList = response.data.data;
            message.success(response.data.msg);
            return true;
        }
    }

    getSubmissions = () => {
        this.submissionListLoading = true;
        const params = {"id":this.userInfo.id};
        const response = httpRequest.get("/hfuuAcm/getSubmissions",params);
        this.submissionListLoading = false;
        if(response.status === 200){
            this.submissionList = response.data.data;
            message.success(response.data.msg);
            return true;
        }
    }

    getPendingJudgeList = () => {
        this.pendingListLoading = true;
        const response = httpRequest.get("/hfuuAcm/getPendingJudgeList",{"id":this.userInfo.id});
        this.pendingListLoading = false;
        if(response.status === 200){
            this.pendingList = response.data.data;
            message.success(response.data.msg);
            return true;
        }
    }

    updateSubmission = (params) => {
        const response = httpRequest.post("/hfuuAcm/updateSubmission",params);
        if(response.status === 200) {
            message.success(response.data.msg);
            return true;
        }
    }
    // todo
    IsRoot = () => {
        return 1;
    }

    IsMentor = () => {
        return 1;
    }

    IsUser = () => {
        return 1;
    }
}

export default new UserStore();