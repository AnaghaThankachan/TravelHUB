import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BookingComponent } from './pages/booking/booking.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"blog",component:BlogComponent},
    {path:"booking",component:BookingComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"faq",component:FaqComponent},
    {path:"contact",component:ContactComponent},
];
