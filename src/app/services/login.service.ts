import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {error} from 'selenium-webdriver';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    result: any = {};
    url = 'https://sgni.in/api/run_new.php?call=register';
    scode: string;
    otp: string;
    student_id: string;
    getphonevalue;
    mycode;

     httpOptionsPlain = {
        headers: new HttpHeaders({
            'Accept': 'text/plain',
            'Content-Type': 'text/plain'
        }),
        'responseType': 'text'
    };

    constructor(private http: HttpClient,
                public storage: Storage,
                private router : Router) {
    }


    register(phone,ref)
    {
        return  this.http.get(`${this.url}&phone=${phone}&ref=${ref}`);
    }


    registerph(phone: string) {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.url}&phone=${phone}`).subscribe((res) => {
                console.log('RegisterApi', res);
                this.result = res;
                this.result.data.forEach((item) => {

                    this.scode = item.scode;
                    this.otp = item.otp;
                    this.student_id = item.studentid;

                    console.log('single-id', item.studentid);
                    console.log('otp', item.otp);
                    console.log('scode', item.scode);
                });
            }, err => {
                reject(err);
            });
        });
    }

    location() {
        return this.http.get(`https://sgni.in/api/run_new.php?call=locationcity`);
    }

    city(locid) {
        return this.http.get(`https://sgni.in/api/run_new.php?call=locationcity&param=${locid}`);
    }

    courses(id) {
        return this.http.get(`https://sgni.in/api/run_new.php?call=cview&loc=${id}`).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.error("Error Event");
                    } else {
                        console.log(`error status : ${error.status} ${error.statusText}`);
                        switch (error.status) {
                            case 200:      //login
                                console.log(error.message);
                                break;
                            case 403:     //forbidden
                                this.router.navigateByUrl("/unauthorized");
                                break;
                        }
                    }
                } else {
                    console.error("some thing else happened");
                }
                return throwError(error);



            })
        )
    }


    enquire(phone: string, time: string, msg: string) {
        return this.http.get(`https://sgni.in/api/run_new.php?call=enquire&phone=${phone}&time${time}&msg=${msg}`);
    }

    knowmore(instituteId)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=CoursefeesbyIntId&param=${instituteId}`);
    }
    Show_institutes_Photo(instituteId)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=Show_institutesPhotos&param=${instituteId}`);
    }

    courseduration(institutecourseid)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=Show_Courses_Fees&param=${institutecourseid}`);

    }

    payatcenter(institutecourseid,feesid,batch,instituteid,instituteslug,studentid,wb)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=order&cid=${institutecourseid}&fees=${feesid}&batch=${batch}&sid=${studentid}&instid${instituteid}&slug=${instituteslug}&wb=${wb}`);
    }

    bookings(s)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=myorder&s=${s}`);

    }
    wallet(s)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=wallb&s=${s}`);
    }

    mainpagetopcourses()
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=topinstitutes`);
    }

    mainpagetopcourses2()
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=topcourse&param=1`);
    }
    mainpagetopcourses3()
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=topcourse&param=2`);
    }

    mainpagetopcourses_knowmore(instituteId)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=CoursefeesbyIntId&param=${instituteId}`);
    }



    /*localstorage*/
    // set a key/value
    async set(key: string, value: any): Promise<any> {
        try {
            const result = await this.storage.set(key, value);
            console.log('set string in storage: ' + result);
            return true;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }


    async get(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            console.log('storageGET: ' + key + ': ' + result);
            if (result != null) {
                this.router.navigateByUrl('/home', { replaceUrl: true });
                return result;

            }
            else{
                this.router.navigateByUrl('login',{replaceUrl:true})
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    async getphone(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            console.log('storageGET: ' + key + ': ' + result);

            return this.getphonevalue=result;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    clear()
    {
        this.storage.clear();
    }

    search(value)
    {
        return this.http.get(`https://sgni.in/api/run_new.php?call=find&a=${value}`);
    }

    updatephone(spid,name,add,phone,gender)
    {
        return  this.http.get(`https://sgni.in/api/run_new.php?call=profileupdate&spid=${spid}&name=${name}&gender=${gender}&address=${add}&phone=${phone}`);
    }

    Get_Student_ProfileId(sid)
    {
        return  this.http.get(`https://sgni.in/api/run_new.php?call=Get_Student_ProfileId&param=${sid}`);
    }


    async my() {
        this.mycode = await this.storage.get('scode');
        return this.mycode;
    }


    async getSid(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            console.log('storageGET: ' + key + ': ' + result);

            return this.getphonevalue=result;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }


}
