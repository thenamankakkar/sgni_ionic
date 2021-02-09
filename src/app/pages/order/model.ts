export class Model {

    public orderid : string;
    public ordertotal : string;
    public orderqty : string;
    public orderdate : string;

    constructor(userResponse : any)
    {
        this.orderid = userResponse.orderid;
        this.ordertotal = userResponse.order_total;
        this.orderqty = userResponse.order_qty;
        this.orderdate = userResponse.order_date;
    }

}
