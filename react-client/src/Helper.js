/**
 * Check whether the user is authenticated
 *
 * @return bool
 */
export const apiUrl = 'http://localhost:5000/api/';

export function isUserAuthenticated() {
    const cookieExpire = sessionStorage.getItem('cookieExpire');
    if (cookieExpire !== undefined) {
        const currentDate = new Date();
        var diffInMins = (currentDate.getTime() - cookieExpire) / 60000;
        if (diffInMins <= 5) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
