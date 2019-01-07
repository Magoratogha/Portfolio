import { trigger, style, animate, transition, query, group, animateChild } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimation', [
        transition('* => ContactPage,  HomePage => *, AboutPage => SkillsPage', [
            query(':enter', style({ transform: 'translateX(100%)' })),
            query(':enter, :leave', style({ position: 'fixed', top: 0, left: 0, right: 0 })),
            group([
                // tslint:disable-next-line:max-line-length
                query(':leave', [animate('0.8s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(-100%)' }))], { optional: true }),
                // tslint:disable-next-line:max-line-length
                query(':enter', [animate('0.8s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(0%)'}))]),
            ])
        ]),
        transition('ContactPage => SkillsPage, ContactPage => AboutPage, SkillsPage => AboutPage', [
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'fixed', top: 0, left: 0, right: 0 })),
            group([
                // tslint:disable-next-line:max-line-length
                query(':leave', [animate('0.8s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(100%)' }))], { optional: true }),
                query(':enter', [animate('0.8s cubic-bezier(0.19, 1, 0.22, 1)', style({ transform: 'translateX(0%)' }))]),
            ])
        ])
    ]);
