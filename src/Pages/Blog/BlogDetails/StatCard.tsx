export default function StatCard({ icon, label, value }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4 text-card-foreground">
            <div className="hidden h-14 w-14 sm:flex items-center justify-center rounded-2xl sm:bg-accent/15 text-accent">
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold text-card-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
            </div>
        </div>
    );
}