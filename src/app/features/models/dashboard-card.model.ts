export interface DashboardCard {
  title: string;
  value: string | number;
  icon: string; // FontAwesome class or image path
  percentage?: string;
  imagePath:string,
  percentageColor?: 'success' | 'danger'; // for green/red badge
}