// برای ایجاد ارتباز بین جداول دیتابیس

    // oneToMany
        // برای ایجاد این نوع ارتباط کافیه این ستون رو به اسکیما مورد نظر اضافه کنیم
        
            // @Prop({
            //     type: [Types.ObjectId], ref: "songs"
            // })
            // songs: Song[];
        

            
        // و برای دریافت اطلاعات باید از populate استفاده کنیم
        
            // async find(): Promise<Album[]> {
            //     return this.albumModel.find().populate("songs", "-album -__v", Song.name)
            // }